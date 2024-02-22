import prisma from '$lib/config/prisma';
import { json } from '@sveltejs/kit';

export async function POST(request) {
	const userId = request.params.userId; // Assuming userId is correctly obtained from somewhere

	try {
		// Check user's current credits without considering the message content
		const user = await prisma.authUser.findUnique({
			where: { id: userId }
		});

		if (user && user.credits > 0) {
			// Deduct a credit from the user's account
			const updatedUser = await prisma.authUser.update({
				where: { id: userId },
				data: {
					credits: { decrement: 1 }
				}
			});

			// Return success response with updated credits info
			return json({
				success: true,
				message: 'Credit deducted successfully.',
				user: updatedUser
			});
		} else {
			// Handle case where user has insufficient credits
			return json({
				status: 400,
				body: {
					success: false,
					message: 'Insufficient credits to perform the operation.'
				}
			});
		}
	} catch (error) {
		console.error(error);
		// Handle any errors during the process
		return json({
			status: 500,
			body: {
				success: false,
				message: 'Failed to deduct credit'
			}
		});
	}
}
