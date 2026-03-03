<script>
	import { page } from '$app/stores';
</script>

<div class="min-h-screen flex items-center justify-center p-4">
	<div class="text-center max-w-md mx-auto">
		<h1 class="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500 bg-clip-text text-transparent mb-4">
			Oops!
		</h1>
		<p class="text-xl md:text-2xl dark:text-gray-300 text-gray-700 mb-6">
			{$page.error?.message || 'Article not found'}
		</p>
		<p class="dark:text-gray-400 text-gray-600 mb-8">
			The article you're looking for doesn't exist or has been removed.
		</p>
		<a
			href="/"
			class="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
		>
			← Back Home
		</a>
	</div>
</div>
