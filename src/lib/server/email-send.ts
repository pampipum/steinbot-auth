import { Resend } from 'resend';
import { FROM_EMAIL, RESEND_API_KEY } from '$env/static/private';

export default async function sendEmail(
	email: string,
	subject: string,
	bodyHtml?: string,
	bodyText?: string
) {
	const resend = new Resend(RESEND_API_KEY);

	try {
		// Choose HTML or text based on what's provided
		const body = bodyHtml ? { html: bodyHtml } : { text: bodyText };

		const { data, error } = await resend.emails.send({
			from: FROM_EMAIL,
			to: [email],
			subject: subject,
			...body
		});

		if (error) {
			throw new Error(`Error sending email: ${JSON.stringify(error)}`);
		}

		console.log('E-mail sent successfully!', data);
		return {
			statusCode: 200,
			message: 'E-mail sent successfully.'
		};
	} catch (error) {
		throw new Error(`Error sending email: ${JSON.stringify(error)}`);
	}
}
