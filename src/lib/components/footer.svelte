<script>
	import { info } from '$lib/utils/info';
</script>

<!-- Wai Yan Phyoe visual system: a dark editorial footer with a strong closing invitation, verified contact, and mobile-safe navigation columns. -->
<footer
	class="mt-16 border-t border-zinc-200/80 py-12 dark:border-white/10 minmd:mt-24 minmd:py-20"
>
	<div
		class="rounded-[2rem] bg-[#101114] px-5 py-8 text-white shadow-2xl shadow-black/10 minmd:px-8 minmd:py-10 min-lg:rounded-[2.5rem] min-lg:px-12"
	>
		<div class="grid gap-10 min-lg:grid-cols-[1.2fr_0.8fr] min-lg:gap-20">
			<div class="min-w-0">
				<p class="text-xs font-semibold uppercase tracking-[0.22em] text-blue">
					Let’s make something useful
				</p>
				<h2
					class="mt-5 max-w-xl font-outfit text-4xl font-semibold leading-[0.98] tracking-[-0.06em] text-white minmd:text-6xl"
				>
					Good work starts with a clear problem.
				</h2>
				<p class="mt-5 max-w-lg text-base leading-7 text-zinc-400 minmd:text-lg">
					Have a product, interface, or web problem worth working on? I’m open to thoughtful
					collaboration and practical conversations.
				</p>
				<a
					href="/contact"
					class="mt-7 inline-flex min-h-12 max-w-full items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-semibold text-dark transition hover:-translate-y-0.5 hover:bg-blue hover:text-white focus:outline-none focus:ring-2 focus:ring-blue focus:ring-offset-2 focus:ring-offset-[#101114]"
				>
					Start a brief<span aria-hidden="true">↗</span>
				</a>
			</div>

			<div
				class="grid grid-cols-2 gap-8 border-t border-white/10 pt-8 minmd:grid-cols-3 min-lg:border-t-0 min-lg:pt-2"
			>
				<nav aria-label="Explore links">
					<p class="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-zinc-500">
						Explore
					</p>
					<ul class="mt-4 grid gap-3 text-sm font-medium text-zinc-300">
						<li>
							<a
								href="/"
								class="transition hover:text-blue focus:outline-none focus:ring-2 focus:ring-blue"
								>Home</a
							>
						</li>
						<li>
							<a
								href="/about"
								class="transition hover:text-blue focus:outline-none focus:ring-2 focus:ring-blue"
								>About</a
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
								href="/contact"
								class="transition hover:text-blue focus:outline-none focus:ring-2 focus:ring-blue"
								>Contact</a
							>
						</li>
					</ul>
				</nav>
				<nav aria-label="Reading links">
					<p class="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-zinc-500">Read</p>
					<ul class="mt-4 grid gap-3 text-sm font-medium text-zinc-300">
						<li>
							<a
								href="/articles"
								class="transition hover:text-blue focus:outline-none focus:ring-2 focus:ring-blue"
								>Articles</a
							>
						</li>
						<li>
							<a
								href="/uses"
								class="transition hover:text-blue focus:outline-none focus:ring-2 focus:ring-blue"
								>Uses</a
							>
						</li>
						<li>
							<a
								href="/now"
								class="transition hover:text-blue focus:outline-none focus:ring-2 focus:ring-blue"
								>Now</a
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
					</ul>
				</nav>
				<div
					class="col-span-2 border-t border-white/10 pt-5 minmd:col-span-1 minmd:border-t-0 minmd:pt-0"
				>
					<a
						href="/now"
						class="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-zinc-500 transition hover:text-blue focus:outline-none focus:ring-2 focus:ring-blue"
						>Now</a
					>
					<p class="mt-4 text-sm leading-6 text-zinc-300">{info.location}</p>
					<p class="mt-1 text-sm leading-6 text-emerald-300">{info.availability}</p>
				</div>
			</div>
		</div>

		<div
			class="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs leading-5 text-zinc-500 minmd:flex-row minmd:items-center minmd:justify-between"
		>
			<p><span class="text-zinc-300">{info.name}</span> · {info.handle}</p>
			<p>Built with SvelteKit · Deployed on Cloudflare Pages</p>
			<p>{new Date().getFullYear()}</p>
		</div>
	</div>
</footer>
