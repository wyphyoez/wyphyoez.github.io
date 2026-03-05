<script>
	export let testimonials = [];
</script>

<section class="w-full px-4 py-16 md:py-24">
	<div class="max-w-6xl mx-auto">
		<h2 class="text-3xl md:text-4xl font-bold text-center text-dark dark:text-light mb-4">What People Say</h2>
		<p class="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
			Testimonials from clients and colleagues who've worked with me.
		</p>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
			{#each testimonials as testimonial}
				<div class="p-6 bg-light060 dark:bg-darkBg rounded-xl border border-gray-200 dark:border-gray-700">
					<!-- Stars -->
					<div class="flex gap-1 mb-4">
						{#each [1, 2, 3, 4, 5] as _}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								class="w-5 h-5 text-yellow-400"
							>
								<path
									fill-rule="evenodd"
									d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401h-4.753c-.804 0-1.137 1.02-.588 1.614l3.85 3.76-1.47 4.434c-.203.612.078 1.281.588 1.281.46 0 .898-.194 1.38-.682l3.32-3.204 3.321 3.203c.48.486.92.683 1.38.683.51 0 .79-.67.588-1.28l-1.47-4.434 3.85-3.76c.55-.595.216-1.615-.588-1.615h-4.753l-1.83-4.4z"
									clip-rule="evenodd"
								/>
							</svg>
						{/each}
					</div>

					<!-- Testimonial Text -->
					<p class="text-gray-700 dark:text-gray-300 mb-6 italic">"{testimonial.content}"</p>

					<!-- Author -->
					<div class="flex items-center gap-3">
						<img
							src={testimonial.image}
							alt={testimonial.author}
							class="w-10 h-10 rounded-full bg-gray-300"
						/>
						<div>
							<p class="font-semibold text-dark dark:text-light">{testimonial.author}</p>
							<p class="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	:global(body) {
		/* ensure proper spacing */
	}
</style>
