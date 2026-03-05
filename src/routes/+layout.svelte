<script>
	import '../app.css';
	import '../fonts.css';
	import { onMount } from 'svelte';
	import { theme } from '$lib/stores/theme';
	import Footer from '$lib/components/footer.svelte';
	import Header from '$lib/components/header.svelte';

	let isDarkMode = false;

	onMount(() => {
		// Initialize theme from localStorage on mount
		const saved = localStorage.getItem('isDarkMode');
		const isDark = saved ? JSON.parse(saved) : false;
		isDarkMode = isDark;

		// Subscribe to theme changes
		const unsubscribe = theme.subscribe((value) => {
			isDarkMode = value;
		});

		// Apply initial theme
		if (isDarkMode) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}

		return unsubscribe;
	});
</script>

<div class="max-w-6xl my-0 mx-auto">
	<Header />
	<main class="p-4">
		<slot />
	</main>
	<Footer />
</div>
