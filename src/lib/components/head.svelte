<script>
	import { info } from '$lib/utils/info';
	import Inter from '$lib/fonts/Inter/Inter-Light.ttf';
	import Outfit from '$lib/fonts/Outfit/Outfit-SemiBold.ttf';

	export let name = `${info.name} ${info.handle}`;
	export let description = info.about;
	export let path = '';

	$: canonical = `${info.baseUrl}${path}`;
</script>

<svelte:head>
	<title>{name}</title>
	<meta name="description" content={description} />
	<meta name="author" content={`${info.name} ${info.handle}`} />
	<link rel="canonical" href={canonical} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={name} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonical} />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={name} />
	<meta name="twitter:description" content={description} />
	<link rel="preload" href={Inter} as="font" crossorigin />
	<link rel="preload" href={Outfit} as="font" crossorigin />
</svelte:head>
