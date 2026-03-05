<script>
	import { info } from '$lib/utils/info';
	import Head from '$lib/components/head.svelte';

	let formData = {
		name: '',
		email: '',
		subject: '',
		message: ''
	};

	let isSubmitting = false;
	let submitSuccess = false;

	async function handleSubmit(e) {
		e.preventDefault();
		isSubmitting = true;

		try {
			// In a real application, you would send this to a backend service
			// For now, we'll just simulate the submission
			await new Promise(resolve => setTimeout(resolve, 1000));

			console.log('Form submitted:', formData);
			submitSuccess = true;

			// Reset form
			formData = {
				name: '',
				email: '',
				subject: '',
				message: ''
			};

			// Hide success message after 5 seconds
			setTimeout(() => {
				submitSuccess = false;
			}, 5000);
		} catch (error) {
			console.error('Error submitting form:', error);
		} finally {
			isSubmitting = false;
		}
	}
</script>

<Head name="Contact - Wai Yan Phioe" />

<div class="max-w-4xl mx-auto px-4 py-16 md:py-24">
	<h1 class="text-4xl md:text-5xl font-bold text-dark dark:text-light mb-4">Get In Touch</h1>
	<p class="text-gray-600 dark:text-gray-400 text-lg mb-12">
		I'd love to hear from you. Whether you have a project in mind or just want to say hello, feel free to reach out.
	</p>

	<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
		<!-- Email -->
		<a
			href="mailto:{info.socialMedia.email}"
			class="p-6 bg-light060 dark:bg-darkBg rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition"
		>
			<div class="flex items-center gap-3 mb-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6 text-blue-500"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.972l-7.5 4.5a2.25 2.25 0 01-2.36 0l-7.5-4.5A2.25 2.25 0 013 6.993V6.75"
					/>
				</svg>
				<h3 class="text-lg font-semibold text-dark dark:text-light">Email</h3>
			</div>
			<p class="text-gray-600 dark:text-gray-400">{info.socialMedia.email}</p>
		</a>

		<!-- GitHub -->
		<a
			href={info.socialMedia.github}
			target="_blank"
			rel="noopener noreferrer"
			class="p-6 bg-light060 dark:bg-darkBg rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition"
		>
			<div class="flex items-center gap-3 mb-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 24 24"
					class="w-6 h-6 text-gray-700 dark:text-gray-300"
				>
					<path
						d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.261.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.3 24 12c0-6.627-5.373-12-12-12z"
					/>
				</svg>
				<h3 class="text-lg font-semibold text-dark dark:text-light">GitHub</h3>
			</div>
			<p class="text-gray-600 dark:text-gray-400">View my projects</p>
		</a>

		<!-- LinkedIn -->
		<a
			href={info.socialMedia.linkedin}
			target="_blank"
			rel="noopener noreferrer"
			class="p-6 bg-light060 dark:bg-darkBg rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition"
		>
			<div class="flex items-center gap-3 mb-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="currentColor"
					viewBox="0 0 24 24"
					class="w-6 h-6 text-blue-700"
				>
					<path
						d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.249-.129.597-.129.946v5.421h-3.554s.05-8.789 0-9.705h3.554v1.373c.43-.664 1.199-1.608 2.925-1.608 2.138 0 3.743 1.395 3.743 4.393v5.547zM5.337 9.433c-1.144 0-1.915-.762-1.915-1.715 0-.955.77-1.715 1.916-1.715.045 0 .09 0 .135.001 1.144 0 1.914.76 1.914 1.715 0 .953-.771 1.715-1.915 1.715zm1.946 11.019H3.39V9.748h3.893v10.704zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"
					/>
				</svg>
				<h3 class="text-lg font-semibold text-dark dark:text-light">LinkedIn</h3>
			</div>
			<p class="text-gray-600 dark:text-gray-400">Connect with me</p>
		</a>
	</div>

	<!-- Contact Form -->
	<div class="bg-light060 dark:bg-darkBg rounded-lg border border-gray-200 dark:border-gray-700 p-8">
		<h2 class="text-2xl font-bold text-dark dark:text-light mb-6">Send me a Message</h2>

		{#if submitSuccess}
			<div class="mb-6 p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-lg">
				Thank you for your message! I'll get back to you soon.
			</div>
		{/if}

		<form on:submit={handleSubmit} class="space-y-4">
			<div>
				<label for="name" class="block text-sm font-medium text-dark dark:text-light mb-1">
					Name
				</label>
				<input
					type="text"
					id="name"
					bind:value={formData.name}
					required
					class="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-dark dark:text-light"
					placeholder="Your name"
				/>
			</div>

			<div>
				<label for="email" class="block text-sm font-medium text-dark dark:text-light mb-1">
					Email
				</label>
				<input
					type="email"
					id="email"
					bind:value={formData.email}
					required
					class="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-dark dark:text-light"
					placeholder="your@email.com"
				/>
			</div>

			<div>
				<label for="subject" class="block text-sm font-medium text-dark dark:text-light mb-1">
					Subject
				</label>
				<input
					type="text"
					id="subject"
					bind:value={formData.subject}
					required
					class="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-dark dark:text-light"
					placeholder="Message subject"
				/>
			</div>

			<div>
				<label for="message" class="block text-sm font-medium text-dark dark:text-light mb-1">
					Message
				</label>
				<textarea
					id="message"
					bind:value={formData.message}
					required
					rows="5"
					class="w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-dark dark:text-light resize-none"
					placeholder="Your message..."
				/>
			</div>

			<button
				type="submit"
				disabled={isSubmitting}
				class="w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white font-medium rounded-lg transition"
			>
				{isSubmitting ? 'Sending...' : 'Send Message'}
			</button>
		</form>
	</div>
</div>
