import Stripe from 'stripe';
import { VITE_STRIPE_SECRET_KEY, VITE_STRIPE_ENDPOINT_SECRET } from '$env/static/private';
import prisma from '$lib/config/prisma';
import { error, json } from '@sveltejs/kit';
import type { RequestEvent } from '@sveltejs/kit';

const stripe = new Stripe(VITE_STRIPE_SECRET_KEY, { apiVersion: '2023-10-16' });

export async function POST(event: RequestEvent) {
	const payload = await event.request.text();
	const sig = event.request.headers.get('stripe-signature');

	try {
		const stripeEvent = stripe.webhooks.constructEvent(payload, sig, VITE_STRIPE_ENDPOINT_SECRET);

		// Log all data coming from Stripe
		console.log('Stripe event:', stripeEvent);

		if (stripeEvent.type === 'checkout.session.completed') {
			const session = stripeEvent.data.object;

			// Extract the user ID from the session metadata
			const userId = session.metadata.userId;
			console.log('User ID:', userId); // Ensure this matches your session user object structure

			if (!userId) {
				console.error('User ID is missing from the request context');
				throw error(400, 'User ID is missing from the request context.');
			}

			// Example: Calculate new credits based on payment amount. Adjust logic as needed.
			const creditsToAdd = 10; // Example: 1 credit for every $10 spent.

			// Update the user's credits directly
			const updatedUser = await prisma.authUser.update({
				where: { id: userId },
				data: { credits: { increment: creditsToAdd } }
			});

			if (!updatedUser) {
				console.error('Failed to update user');
				throw error(500, 'Failed to update user.');
			}
		}

		return json({ message: 'Success' });
	} catch (err) {
		console.error('Error processing Stripe webhook:', err);
		throw error(500, 'Internal Server Error');
	}
}
