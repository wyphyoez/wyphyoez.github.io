<script>
	import { info } from '$lib/utils/info';
	import Inter from '$lib/fonts/Inter/Inter-Light.ttf';
	import Outfit from '$lib/fonts/Outfit/Outfit-SemiBold.ttf';

	export let name = `${info.name} ${info.handle}`;
	export let description = info.about;
	export let path = '';
	export let image = info.socialImage;
	export let type = 'website';
	export let publishedTime = null;
	export let structuredData = null;

	$: canonical = `${info.baseUrl}${path}`;
	$: absoluteImage = image?.startsWith('http') ? image : image ? `${info.baseUrl}${image}` : null;
	$: robots = path.startsWith('/articles/') ? 'noindex, follow' : 'index, follow';
	$: defaultStructuredData =
		path === ''
			? {
					'@context': 'https://schema.org',
					'@type': 'Person',
					name: info.name,
					url: info.baseUrl,
					jobTitle: info.jobDescription,
					description: info.about,
					sameAs: [
						info.socialMedia.github,
						info.socialMedia.linkedin,
						info.socialMedia.instagram,
						info.socialMedia.x
					]
			  }
			: null;
	$: jsonLd = structuredData || defaultStructuredData;
	$: jsonLdMarkup = jsonLd
		? `<scr${'ipt'} type="application/ld+json">${JSON.stringify(jsonLd).replace(
				/</g,
				'\\u003c'
		  )}</scr${'ipt'}>`
		: '';
</script>

<svelte:head>
	<title>{name}</title>
	<meta name="description" content={description} />
	<meta name="author" content={`${info.name} ${info.handle}`} />
	<meta name="robots" content={robots} />
	<link rel="canonical" href={canonical} />
	<meta property="og:site_name" content={`${info.name} Portfolio`} />
	<meta property="og:type" content={type} />
	<meta property="og:title" content={name} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonical} />
	{#if absoluteImage}
		<meta property="og:image" content={absoluteImage} />
		<meta property="og:image:alt" content={`${info.name} portfolio preview`} />
	{/if}
	{#if type === 'article' && publishedTime}
		<meta property="article:published_time" content={publishedTime} />
	{/if}
	<meta name="twitter:card" content={absoluteImage ? 'summary_large_image' : 'summary'} />
	<meta name="twitter:site" content={info.handle} />
	<meta name="twitter:title" content={name} />
	<meta name="twitter:description" content={description} />
	{#if absoluteImage}
		<meta name="twitter:image" content={absoluteImage} />
		<meta name="twitter:image:alt" content={`${info.name} portfolio preview`} />
	{/if}
	{@html jsonLdMarkup}
	<link rel="preload" href={Inter} as="font" crossorigin />
	<link rel="preload" href={Outfit} as="font" crossorigin />
</svelte:head>
