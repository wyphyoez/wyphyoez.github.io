import hoobank from '$lib/images/hoobank.png';

export const info = {
	baseUrl: 'https://wyphyoez.cyou',
	name: 'Wai Yan Phyoe',
	handle: '@wyphyoez',
	jobDescription: 'Full-Stack Web Developer',
	location: 'Meiktila, Myanmar',
	availability: 'Open to thoughtful product work',
	about:
		'I build responsive web experiences and practical interfaces with a focus on clarity, maintainability, and the small details that make software feel considered. My work spans front-end systems, API integration, and the steady craft of learning in public.',
	navLinks: [
		{ path: '/', title: 'Home' },
		{ path: '/about', title: 'About' },
		{ path: '/articles', title: 'Articles' },
		{ path: '/projects', title: 'Projects' },
		{ path: '/uses', title: 'Uses' }
	],
	experience: [
		{
			name: 'InterNative Labs, LLC',
			location: 'Karāchi, Sindh, Pakistan',
			startDate: 'Apr 2022',
			endDate: 'Present',
			description: [
				'Developing production UI components and screens with React and Tailwind.',
				'Fixing interface issues and integrating backend APIs with Redux Saga.'
			]
		},
		{
			name: 'Coupon Approve',
			location: 'Amsterdam, Netherlands · Remote',
			startDate: 'Nov 2020',
			endDate: 'Apr 2022',
			description: [
				'Built, documented, tested, deployed, and maintained product features.',
				'Improved code quality through refactoring, best-practice reviews, and colleague support.'
			]
		},
		{
			name: 'Interns Pakistan',
			location: 'Pakistan',
			startDate: 'Oct 2020',
			endDate: 'Nov 2020',
			description: [
				'Completed an immersive six-week internship focused on practical challenges and industry-led learning.'
			]
		}
	],
	education: [
		{
			name: 'Meta',
			location: 'Online',
			startDate: '2022',
			endDate: '2023',
			description: ['Professional Certificate in Front-End and Back-End Development']
		},
		{
			name: 'University of the People',
			location: 'Online',
			startDate: '2022',
			endDate: 'Present',
			description: ['B.Sc. Computer Science']
		},
		{
			name: 'Meiktila University',
			location: 'Meiktila, Mandalay, Myanmar',
			startDate: '2018',
			endDate: 'Present',
			description: ['B.Sc. Mathematics']
		}
	],
	socialMedia: {
		github: 'https://github.com/wyphyoez',
		linkedin: 'https://www.linkedin.com/in/wyphyoez/',
		instagram: 'https://www.instagram.com/wyphyoez/',
		x: 'https://x.com/wyphyoez',
		email: 'ask@wyphyoez.cyou'
	},
	projects: [
		{
			title: 'TinyLife',
			label: 'Private memory app',
			description:
				'A privacy-first mobile memory space for capturing photos, short videos, voice notes, and reflections, then returning to them through a calm personal timeline.',
			stack: ['React Native', 'Expo', 'Supabase'],
			isFeatured: true,
			thumbnail: '/manus-storage/tinylife-portfolio-cover_796bba4a.png'
		},
		{
			title: 'HooBank',
			label: 'Marketing interface',
			description:
				'A responsive finance landing page focused on visual hierarchy, reusable sections, and polished responsive behavior.',
			stack: ['React', 'Tailwind CSS'],
			isFeatured: true,
			thumbnail: hoobank,
			githubUrl: 'https://github.com/wyphyoez/hoobank',
			liveUrl: 'https://hoobank-wyp.vercel.app/'
		},
		{
			title: 'Astro Portfolio',
			label: 'Personal site',
			description:
				'A lightweight personal site exploring content-led layouts, project storytelling, and a quieter reading experience.',
			stack: ['Astro', 'MDX'],
			isFeatured: true,
			thumbnail: hoobank,
			githubUrl: 'https://github.com/uzzii-21/astro-portfolio',
			liveUrl: 'https://astro-portfolio-uzair.vercel.app/'
		}
	]
};
