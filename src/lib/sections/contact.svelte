<script>
	export let email;
	export let socialMedia;

	let formData = {
		name: '',
		email: '',
		message: ''
	};

	let submitted = false;

	function handleSubmit(e) {
		e.preventDefault();
		// Here you would typically send the form data to a server
		submitted = true;
		setTimeout(() => {
			submitted = false;
			formData = { name: '', email: '', message: '' };
		}, 3000);
	}
</script>

<section class="py-20" id="contact">
	<div class="max-w-4xl mx-auto px-4">
		<div class="text-center mb-16">
			<h2 class="text-4xl md:text-5xl font-bold mb-4 gradient-text">Let's Create Together</h2>
			<p class="text-lg text-gray-400">Have a project in mind? Let's discuss it.</p>
		</div>

		<div class="grid md:grid-cols-2 gap-12">
			<!-- Contact Info -->
			<div class="space-y-8">
				<div class="glass-morphism rounded-xl p-8 glow-border">
					<h3 class="font-semibold mb-2 text-[hsl(var(--primary-light))]">Email</h3>
					<a href="mailto:{email}" class="text-lg hover:text-[hsl(var(--primary-light))] transition-colors">
						{email}
					</a>
				</div>

				<div class="glass-morphism rounded-xl p-8 glow-border">
					<h3 class="font-semibold mb-4 text-[hsl(var(--primary-light))]">Connect On Social</h3>
					<div class="flex flex-wrap gap-3">
						<a
							href={socialMedia.github}
							target="_blank"
							rel="noopener noreferrer"
							class="px-4 py-2 rounded-lg glass-morphism hover:bg-white/10 transition-colors text-sm"
						>
							GitHub
						</a>
						<a
							href={socialMedia.linkedin}
							target="_blank"
							rel="noopener noreferrer"
							class="px-4 py-2 rounded-lg glass-morphism hover:bg-white/10 transition-colors text-sm"
						>
							LinkedIn
						</a>
						<a
							href={socialMedia.twitter}
							target="_blank"
							rel="noopener noreferrer"
							class="px-4 py-2 rounded-lg glass-morphism hover:bg-white/10 transition-colors text-sm"
						>
							Twitter
						</a>
					</div>
				</div>

				<div class="glass-morphism rounded-xl p-8 glow-border">
					<h3 class="font-semibold mb-2 text-[hsl(var(--primary-light))]">Available For</h3>
					<ul class="space-y-2 text-sm text-gray-300">
						<li>✓ Freelance Projects</li>
						<li>✓ Full-time Roles</li>
						<li>✓ Consulting & Advisory</li>
						<li>✓ Collaborations</li>
					</ul>
				</div>
			</div>

			<!-- Contact Form -->
			<form on:submit={handleSubmit} class="space-y-6">
				{#if submitted}
					<div class="glass-morphism rounded-xl p-6 border border-green-500/50 text-center">
						<p class="text-green-400">Thank you! I'll get back to you soon.</p>
					</div>
				{/if}

				<div class="space-y-2">
					<label for="name" class="text-sm font-medium">Name</label>
					<input
						type="text"
						id="name"
						name="name"
						bind:value={formData.name}
						required
						class="w-full px-4 py-3 rounded-lg glass-morphism border border-white/20 focus:border-[hsl(var(--primary))]/50 focus:outline-none transition-colors bg-white/5 text-white placeholder-gray-500"
						placeholder="Your name"
					/>
				</div>

				<div class="space-y-2">
					<label for="email" class="text-sm font-medium">Email</label>
					<input
						type="email"
						id="email"
						name="email"
						bind:value={formData.email}
						required
						class="w-full px-4 py-3 rounded-lg glass-morphism border border-white/20 focus:border-[hsl(var(--primary))]/50 focus:outline-none transition-colors bg-white/5 text-white placeholder-gray-500"
						placeholder="your@email.com"
					/>
				</div>

				<div class="space-y-2">
					<label for="message" class="text-sm font-medium">Message</label>
					<textarea
						id="message"
						name="message"
						bind:value={formData.message}
						required
						rows="5"
						class="w-full px-4 py-3 rounded-lg glass-morphism border border-white/20 focus:border-[hsl(var(--primary))]/50 focus:outline-none transition-colors bg-white/5 text-white placeholder-gray-500 resize-none"
						placeholder="Tell me about your project..."
					/>
				</div>

				<button type="submit" class="btn-primary w-full">
					Send Message
				</button>
			</form>
		</div>
	</div>
</section>
