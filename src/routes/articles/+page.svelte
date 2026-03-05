<script>
	import Head from '$lib/components/head.svelte';
	import ArticleSearch from '$lib/components/ArticleSearch.svelte';

	// Sample articles data - in production, these would come from a database or CMS
	const articles = [
		{
			id: 1,
			title: 'Getting Started with SvelteKit',
			description: 'Learn the basics of building modern web applications with SvelteKit.',
			content: 'SvelteKit is a powerful framework for building web applications...',
			date: '2024-01-15',
			author: 'Wai Yan Phioe',
			slug: 'getting-started-sveltekit'
		},
		{
			id: 2,
			title: 'Web Performance Optimization Tips',
			description: 'Best practices to make your web applications faster and more efficient.',
			content: 'Performance is crucial for user experience. Here are some key strategies...',
			date: '2024-01-10',
			author: 'Wai Yan Phioe',
			slug: 'web-performance-tips'
		},
		{
			id: 3,
			title: 'Understanding React Hooks',
			description: 'Deep dive into React Hooks and how to use them effectively.',
			content: 'React Hooks revolutionized how we write React components...',
			date: '2024-01-05',
			author: 'Wai Yan Phioe',
			slug: 'react-hooks-guide'
		},
		{
			id: 4,
			title: 'Tailwind CSS Best Practices',
			description: 'Master Tailwind CSS to write maintainable and scalable styles.',
			content: 'Tailwind CSS is a utility-first CSS framework that...',
			date: '2023-12-28',
			author: 'Wai Yan Phioe',
			slug: 'tailwind-best-practices'
		},
		{
			id: 5,
			title: 'Building Responsive Designs',
			description: 'Create responsive websites that look great on all devices.',
			content: 'Mobile-first design is the modern approach to web design...',
			date: '2023-12-20',
			author: 'Wai Yan Phioe',
			slug: 'responsive-design-guide'
		},
		{
			id: 6,
			title: 'JavaScript ES6 Features You Should Know',
			description: 'Explore modern JavaScript features that improve code quality.',
			content: 'ES6 introduced many powerful features to JavaScript...',
			date: '2023-12-15',
			author: 'Wai Yan Phioe',
			slug: 'js-es6-features'
		}
	];
</script>

<Head name="Articles - Wai Yan Phioe" />

<div class="max-w-4xl mx-auto px-4 py-16 md:py-24">
	<h1 class="text-4xl md:text-5xl font-bold text-dark dark:text-light mb-4">Articles</h1>
	<p class="text-gray-600 dark:text-gray-400 text-lg mb-12">
		Thoughts on web development, design, and technology.
	</p>

	<ArticleSearch {articles} />

	<div class="space-y-6">
		{#each articles as article}
			<article class="p-6 bg-light060 dark:bg-darkBg rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition cursor-pointer">
				<div class="flex justify-between items-start mb-2">
					<h2 class="text-2xl font-bold text-dark dark:text-light">{article.title}</h2>
					<span class="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap ml-4">
						{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
					</span>
				</div>
				<p class="text-gray-600 dark:text-gray-400 mb-3">{article.description}</p>
				<a
					href="/articles/{article.slug}"
					class="inline-block text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
				>
					Read More →
				</a>
			</article>
		{/each}
	</div>
</div>
