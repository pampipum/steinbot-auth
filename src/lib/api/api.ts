// file: $lib/api/api.ts

export async function initializeThread(apiUrl: string): Promise<string> {
	const response = await fetch(`${apiUrl}/start`);
	const data = await response.json();
	if (!response.ok) {
		throw new Error(data.error || 'Failed to initialize conversation thread.');
	}
	return data.thread_id;
}

export async function postChat(
	apiUrl: string,
	threadId: string,
	message: string,
	userId: string
): Promise<any> {
	// First, attempt to post the chat message
	const response = await fetch(`${apiUrl}/chat`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			thread_id: threadId,
			message: message
		})
	});

	const data = await response.json();
	if (!response.ok) {
		throw new Error(data.error || 'Error posting chat message.');
	}

	// If the chat message is successfully posted, deduct a message from the user
	const deductionResponse = await fetch(`/api/user/${userId}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ message })
	});

	if (!deductionResponse.ok) {
		// Handle case when message deduction fails (optional, based on your application logic)
		console.error('Failed to deduct a message count after posting');
	}

	return data; // Return the original chat post response
}
