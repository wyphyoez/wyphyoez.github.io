<script>
	import { info } from '$lib/utils/info';
</script>

<footer class="mt-8 border-t border-zinc-200/80 py-8 dark:border-white/10">
	<div class="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
		<div>
			<p class="font-outfit text-lg font-semibold text-dark dark:text-white">{info.name}</p>
			<p class="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
				{info.handle} · {info.jobDescription}
			</p>
		</div>
		<nav aria-label="Footer navigation">
			<ul
				class="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-zinc-500 dark:text-zinc-400"
			>
				<li>
					<a
						href="/about"
						class="transition hover:text-blue focus:outline-none focus:ring-2 focus:ring-blue"
						>About</a
					>
				</li>
				<li>
					<a
						href="/articles"
						class="transition hover:text-blue focus:outline-none focus:ring-2 focus:ring-blue"
						>Articles</a
					>
				</li>
				<li>
					<a
						href="/projects"
						class="transition hover:text-blue focus:outline-none focus:ring-2 focus:ring-blue"
						>Projects</a
					>
				</li>
				<li>
					<a
						href={info.socialMedia.github}
						target="_blank"
						rel="noopener noreferrer"
						class="transition hover:text-blue focus:outline-none focus:ring-2 focus:ring-blue"
						>GitHub</a
					>
				</li>
				<li>
					<a
						href={`mailto:${info.socialMedia.email}`}
						class="transition hover:text-blue focus:outline-none focus:ring-2 focus:ring-blue"
						>Contact</a
					>
				</li>
			</ul>
		</nav>
	</div>
	<p class="mt-8 text-xs text-zinc-400">Built with SvelteKit · Deployed on Cloudflare Pages</p>
</footer>
