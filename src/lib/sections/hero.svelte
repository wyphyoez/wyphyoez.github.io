<script>
	export let name;
</script>

<section class="relative min-h-screen flex items-center justify-center py-20 md:py-24">
	<div class="w-full max-w-4xl mx-auto px-4">
		<div class="flex flex-col justify-center items-center text-center">
			<p class="dark:text-light text-base md:text-lg mb-4">Hi, I'm</p>
			<h1
				class="main-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
			>
				<span>{name}.</span><br />
				<span>I build things for the web.</span>
			</h1>
			<p class="dark:text-light text-gray-600 dark:text-gray-300 text-base md:text-lg max-w-2xl">
				A Software engineer with a passion for solving problems and learning new things.
			</p>
		</div>

		<div class="hidden md:flex text-center justify-center absolute bottom-8 left-1/2 transform -translate-x-1/2 flex-col items-center animate-bounce">
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="dark:text-light text-dark">
				<path
					d="M11.975 22H12c3.859 0 7-3.14 7-7V9c0-3.841-3.127-6.974-6.981-7h-.06C8.119 2.022 5 5.157 5 9v6c0 3.86 3.129 7 6.975 7zM7 9a5.007 5.007 0 0 1 4.985-5C14.75 4.006 17 6.249 17 9v6c0 2.757-2.243 5-5 5h-.025C9.186 20 7 17.804 7 15V9z"
				/>
				<path d="M11 6h2v6h-2z" />
			</svg>
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="dark:text-light text-dark">
				<path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z" />
			</svg>
		</div>
	</div>
</section>
