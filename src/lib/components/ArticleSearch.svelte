<script>
	export let articles = [];
	let searchQuery = '';

	$: filteredArticles = articles.filter(article => {
		const query = searchQuery.toLowerCase();
		return (
			article.title.toLowerCase().includes(query) ||
			article.description?.toLowerCase().includes(query) ||
			article.content?.toLowerCase().includes(query)
		);
	});
</script>

<div class="w-full max-w-2xl mx-auto mb-8">
	<div class="relative">
		<input
			type="text"
			placeholder="Search articles..."
			bind:value={searchQuery}
			class="w-full px-4 py-3 pl-10 bg-light060 dark:bg-darkBg rounded-lg border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-dark dark:text-light"
		/>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="w-5 h-5 absolute left-3 top-3.5 text-gray-400"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.5 5.5a7.5 7.5 0 0010.5 10.5z"
			/>
		</svg>
	</div>

	{#if searchQuery && filteredArticles.length === 0}
		<p class="text-center text-gray-500 dark:text-gray-400 mt-4">No articles found matching "{searchQuery}"</p>
	{/if}

	{#if filteredArticles.length > 0}
		<div class="mt-4 space-y-3">
			{#each filteredArticles as article}
				<div class="p-4 bg-light060 dark:bg-darkBg rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition">
					<h3 class="font-semibold text-dark dark:text-light mb-1">{article.title}</h3>
					{#if article.description}
						<p class="text-sm text-gray-600 dark:text-gray-400">{article.description}</p>
					{/if}
				</div>
			{/each}
		</div>
	{/if}
</div>
