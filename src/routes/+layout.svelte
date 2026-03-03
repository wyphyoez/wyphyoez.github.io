<script>
	import '../app.css';
	import '../fonts.css';
	import Footer from '$lib/components/footer.svelte';
	import Header from '$lib/components/header.svelte';
</script>

<div class="min-h-screen flex flex-col">
	<Header />
	<main class="flex-1 max-w-6xl w-full mx-auto px-4 py-8 md:px-6 md:py-12 mt-20 md:mt-24">
		<slot />
	</main>
	<Footer />
</div>
