// src/lib/stores/userStore.ts
import { writable } from 'svelte/store';

export const userStore = writable<Lucia.UserAttributes | null>(null);
