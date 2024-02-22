import { writable } from 'svelte/store';

// Initialize the store with 0 or an initial value if you have one
export const userCredits = writable(0);
