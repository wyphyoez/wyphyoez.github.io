import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Initialize dark mode from localStorage if available
function createThemeStore() {
	let initialValue = false;

	// Only read from localStorage on browser
	if (browser) {
		const saved = localStorage.getItem('isDarkMode');
		initialValue = saved ? JSON.parse(saved) : false;
	}

	// Check system preference as fallback
	if (!browser && typeof window !== 'undefined') {
		initialValue = window.matchMedia('(prefers-color-scheme: dark)').matches;
	}

	const { subscribe, set, update } = writable<boolean>(initialValue);

	return {
		subscribe,
		set,
		toggle: () => {
			update((value) => !value);
		},
		sync: () => {
			if (browser) {
				const isDark = localStorage.getItem('isDarkMode');
				set(isDark ? JSON.parse(isDark) : false);
			}
		}
	};
}

export const theme = createThemeStore();
