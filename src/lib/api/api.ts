// file: $lib/api/api.ts

export async function initializeThread(apiUrl: string): Promise<string> {
	const response = await fetch(`${apiUrl}/start`);
	const data = await response.json();
	if (!response.ok) {
		throw new Error(data.error || 'Failed to initialize conversation thread.');
	}
	return data.thread_id;
}

export async function postChat(apiUrl: string, threadId: string, message: string): Promise<any> {
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
	return data;
}
