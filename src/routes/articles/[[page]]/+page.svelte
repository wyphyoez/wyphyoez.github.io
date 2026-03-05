<script>
	import { info } from '$lib/utils/info.js';

	/** @type {import('./$types').PageData} */
	export let data;
	let searchQuery = '';

	$: isFirstPage = data.page === 1;
	$: hasNextPage = data.articles[data.articles.length - 1]?.previous;
	$: filteredArticles = data.articles.filter(article => 
		article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
		(article.preview?.text || '').toLowerCase().includes(searchQuery.toLowerCase())
	);
</script>

<svelte:head>
	<title>{info.name} | Articles</title>
</svelte:head>

<div class="space-y-6">
	<div class="mb-8">
		<input
			type="text"
			placeholder="Search articles..."
			bind:value={searchQuery}
			class="w-full px-4 py-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
			aria-label="Search articles"
		/>
		{#if searchQuery && filteredArticles.length === 0}
			<p class="text-gray-500 dark:text-gray-400 mt-4">No articles found matching "{searchQuery}"</p>
		{/if}
	</div>

	<div class="space-y-4">
		{#each filteredArticles as article}
			<article class="border-b border-gray-200 dark:border-gray-700 pb-4">
				<a href={`./article/${article.slug}`} class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
					<h2 class="text-xl font-semibold mb-2">{article.title}</h2>
				</a>
				{#if article.preview?.text}
					<p class="text-gray-600 dark:text-gray-400 text-sm mb-2">{article.preview.text.substring(0, 150)}...</p>
				{/if}
				<div class="flex gap-4 text-xs text-gray-500 dark:text-gray-500">
					{#if article.date}
						<span>{article.date}</span>
					{/if}
					{#if article.readingTime}
						<span>{article.readingTime}</span>
					{/if}
				</div>
			</article>
		{/each}
	</div>
</div>
