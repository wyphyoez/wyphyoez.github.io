<script>
	import { info } from '$lib/utils/info';
</script>

<!-- Wai Yan Phyoe visual system: footer uses a quiet dark canvas, a strong identity column, and generous mobile wrapping so links never collide or clip. -->
<footer
	class="mt-16 border-t border-zinc-200/80 py-12 dark:border-white/10 minmd:mt-24 minmd:py-16"
>
	<div class="grid gap-10 minmd:grid-cols-[1.15fr_0.85fr] minmd:items-start min-lg:gap-20">
		<div class="min-w-0">
			<a
				href="/"
				class="inline-flex font-outfit text-2xl font-semibold tracking-[-0.04em] text-dark transition hover:text-blue focus:outline-none focus:ring-2 focus:ring-blue dark:text-white"
			>
				{info.name}
			</a>
			<p class="mt-3 max-w-xs text-base leading-7 text-zinc-500 dark:text-zinc-400">
				{info.handle} <span aria-hidden="true">·</span>
				{info.jobDescription}
			</p>
			<a
				href={`mailto:${info.socialMedia.email}`}
				class="mt-6 inline-flex max-w-full break-all rounded-full border border-zinc-300 px-4 py-2.5 text-sm font-semibold text-zinc-700 transition hover:border-blue hover:text-blue focus:outline-none focus:ring-2 focus:ring-blue dark:border-white/20 dark:text-zinc-200"
			>
				{info.socialMedia.email}
			</a>
		</div>

		<nav aria-label="Footer navigation" class="min-w-0">
			<p class="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">Navigate</p>
			<ul
				class="grid grid-cols-2 gap-x-6 gap-y-4 text-base font-medium text-zinc-500 minmd:grid-cols-2 dark:text-zinc-400"
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
	<div
		class="mt-12 flex flex-col gap-2 border-t border-zinc-200/80 pt-6 text-xs leading-5 text-zinc-400 minmd:flex-row minmd:items-center minmd:justify-between dark:border-white/10"
	>
		<p>Built with SvelteKit · Deployed on Cloudflare Pages</p>
		<p>{new Date().getFullYear()} Wai Yan Phyoe</p>
	</div>
</footer>
