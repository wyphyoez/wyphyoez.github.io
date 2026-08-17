<script>
	import '../app.css';
	import '../fonts.css';
	import Footer from '$lib/components/footer.svelte';
	import Header from '$lib/components/header.svelte';
</script>

<div class="max-w-6xl my-0 mx-auto">
	<Header />
	<main class="px-4 pb-4 pt-24 minmd:pt-28">
		<slot />
	</main>
	<Footer />
</div>
