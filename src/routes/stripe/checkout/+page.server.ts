import type { Actions } from './$types';
import { error, redirect, type Redirect } from '@sveltejs/kit';
import Stripe from 'stripe';
import { VITE_STRIPE_SECRET_KEY } from '$env/static/private';

const stripe = new Stripe(VITE_STRIPE_SECRET_KEY, { apiVersion: '2023-10-16' });

export const actions: Actions = {
	default: async ({ request }) => {
		let url: string | null;

		try {
			// Extract the form data from the request
			const formData = await request.formData();
			const userId = formData.get('userId')?.toString(); // Ensure userId is a string
			console.log('Before creating session');
			const session = await stripe.checkout.sessions.create({
				line_items: [
					{
						price: 'price_1OmYoyD73Fyj3iUEUQ5oFIlO',
						quantity: 1
					}
				],
				mode: 'payment',
				success_url: `${request.headers.get('origin')}/?success=true`,
				cancel_url: `${request.headers.get('origin')}/?cancelled=true`,
				metadata: {
					userId: userId // Add the userId to the metadata
				}
			});
			console.log('After creating session');

			url = session.url;
		} catch (errorObj) {
			throw error(500, 'Unknown error occurred');
		}

		if (url) {
			console.log(url);
			throw redirect(303, url);
		}
	}
};
