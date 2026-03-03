<script>
	import Inter from '$lib/fonts/Inter/Inter-Light.ttf';
	import Outfit from '$lib/fonts/Outfit/Outfit-SemiBold.ttf';
	export let name;
</script>

<svelte:head>
	<title>{name} - Frontend Engineer & Interactive Developer</title>
	<meta name="description" content="Frontend engineer specializing in SvelteKit, TypeScript, and interactive WebGL experiences. Building cinematic web experiences with depth and immersion." />
	<meta name="keywords" content="frontend engineer, SvelteKit, TypeScript, WebGL, Three.js, interactive web, React, Next.js" />
	<meta name="author" content={name} />
	<meta property="og:title" content="{name} - Frontend Engineer & Interactive Developer" />
	<meta property="og:description" content="Specialized in SvelteKit, TypeScript, and WebGL. Creating cinematic frontend experiences." />
	<meta property="og:type" content="website" />
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:creator" content="@wyphyoez" />
	<meta name="theme-color" content="#0a0c14" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<link rel="preload" href={Inter} as="font" crossorigin />
	<link rel="preload" href={Outfit} as="font" crossorigin />
</svelte:head>
