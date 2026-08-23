<script>
	import { info } from '$lib/utils/info.js';
	import ArticleData from '$lib/components/ArticleData.svelte';
	import Head from '$lib/components/head.svelte';
	import Icon from '$lib/components/Icon.svelte';

	/** @type {import('./$types').PageData} */
	export let data;

	const ogImage = `https://og-image.vercel.app/**${encodeURIComponent(
		data.article.title
	)}**?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-color-logo.svg`;
	$: articlePath = `/article/${data.article.slug}`;
	$: articleUrl = `${info.baseUrl}${articlePath}`;
	$: articleJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		headline: data.article.title,
		description: data.article.preview.text,
		image: ogImage,
		datePublished: new Date(data.article.date).toISOString(),
		dateModified: new Date(data.article.updated || data.article.date).toISOString(),
		mainEntityOfPage: articleUrl,
		author: { '@type': 'Person', name: info.name, url: info.baseUrl },
		publisher: { '@type': 'Person', name: info.name }
	};
</script>

<Head
	name={`${data.article.title} | ${info.name}`}
	description={data.article.preview.text}
	path={articlePath}
	image={ogImage}
	type="article"
	publishedTime={new Date(data.article.date).toISOString()}
	structuredData={articleJsonLd}
/>

<article class="mx-auto max-w-4xl py-8 minmd:py-12">
	<a
		href="/articles"
		class="inline-flex items-center gap-2 text-sm font-semibold text-zinc-500 transition hover:text-blue focus:outline-none focus:ring-2 focus:ring-blue"
		><Icon name="arrowLeft" className="h-4 w-4" /> Back to articles</a
	>
	<header class="mt-10 max-w-3xl border-b border-zinc-200/80 pb-10 dark:border-white/10">
		<p class="text-xs font-semibold uppercase tracking-[0.22em] text-blue">Field note</p>
		<h1
			class="mt-4 font-outfit text-4xl font-semibold leading-[1.03] tracking-[-0.055em] text-zinc-800 minmd:text-6xl dark:text-zinc-100"
		>
			{data.article.title}
		</h1>
		<ArticleData class="mt-6 text-sm" post={data.article} decorate />
		<p class="mt-5 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
			{data.article.preview.text}
		</p>
	</header>

	<div
		class="article-reading mt-10 max-w-3xl text-[1.05rem] leading-8 text-zinc-700 dark:text-zinc-300"
	>
		<svelte:component this={data.component} />
	</div>

	<nav
		class="mt-14 grid gap-4 border-t border-zinc-200/80 pt-6 minmd:grid-cols-2 dark:border-white/10"
		aria-label="Article navigation"
	>
		{#if data.article.next}
			<a
				href={`/article/${data.article.next.slug}`}
				class="group rounded-2xl border border-zinc-200/80 p-5 transition hover:-translate-y-0.5 hover:border-blue focus:outline-none focus:ring-2 focus:ring-blue dark:border-white/10"
			>
				<span
					class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400"
					><Icon name="arrowLeft" className="h-3.5 w-3.5" /> Older note</span
				>
				<span
					class="mt-3 block font-outfit text-lg font-semibold text-zinc-800 group-hover:text-blue dark:text-zinc-100"
					>{data.article.next.title}</span
				>
			</a>
		{:else}<span />{/if}
		{#if data.article.previous}
			<a
				href={`/article/${data.article.previous.slug}`}
				class="group rounded-2xl border border-zinc-200/80 p-5 text-left transition hover:-translate-y-0.5 hover:border-blue focus:outline-none focus:ring-2 focus:ring-blue minmd:text-right dark:border-white/10"
			>
				<span
					class="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400"
					>Newer note <Icon name="arrowRight" className="h-3.5 w-3.5" /></span
				>
				<span
					class="mt-3 block font-outfit text-lg font-semibold text-zinc-800 group-hover:text-blue dark:text-zinc-100"
					>{data.article.previous.title}</span
				>
			</a>
		{/if}
	</nav>
</article>
