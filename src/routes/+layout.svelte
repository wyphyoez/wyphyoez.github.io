<script>
	import '../app.css';
	import '../fonts.css';
	import Footer from '$lib/components/footer.svelte';
	import Header from '$lib/components/header.svelte';
</script>

<div class="min-h-screen flex flex-col bg-[hsl(var(--background))]">
	<Header />
	<main class="flex-1 w-full">
		<slot />
	</main>
	<Footer />
</div>
