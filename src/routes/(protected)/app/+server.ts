// file: $lib/api/api.ts
import type { RequestHandler } from '@sveltejs/kit';

// Assuming these functions are moved here or imported from another server-side only location
async function initializeThread(apiUrl: string): Promise<string> {
    const response = await fetch(`${apiUrl}/start`);
    const data = await response.json();
    if (!response.ok) {
        throw new Error(data.error || 'Failed to initialize conversation thread.');
    }
    return data.thread_id;
}

async function postChat(apiUrl: string, threadId: string, message: string): Promise<any> {
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

export const POST: RequestHandler = async ({ request }) => {
    // Extract your apiUrl, threadId, and message from the request body
    // Depending on your application structure, you may pass these in the body or fetch them here directly
    const body = await request.json();
    const { apiUrl, threadId, message } = body;

    try {
        const data = await postChat(apiUrl, threadId, message);
        return { status: 200, body: data };
    } catch (error) {
        return { status: 500, body: { error: error.message } };
    }
};

export const GET: RequestHandler = async ({ url }) => {
    // Extract apiUrl from query parameters or set a default
    const apiUrl = url.searchParams.get('apiUrl') || 'http://localhost:8080';

    try {
        const threadId = await initializeThread(apiUrl);
        return { status: 200, body: { threadId } };
    } catch (error) {
        return { status: 500, body: { error: error.message } };
    }
};

