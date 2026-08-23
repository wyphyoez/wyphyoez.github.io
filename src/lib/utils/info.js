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
			slug: 'tinylife',
			title: 'TinyLife',
			label: 'Private memory app',
			description:
				'A privacy-first mobile memory space for capturing photos, short videos, voice notes, and reflections, then returning to them through a calm personal timeline.',
			stack: ['React Native', 'Expo', 'Supabase'],
			isFeatured: true,
			thumbnail:
				'https://files.manuscdn.com/user_upload_by_module/session_file/310519663886508705/oncODtkEAdJjTaEQ.png',
			role: 'Product design & mobile engineering',
			year: '2026',
			caseStudy: {
				overview:
					'A quiet mobile space for keeping everyday memories close without turning reflection into a performance.',
				challenge:
					'Design a personal memory flow that can hold different kinds of moments—photos, short videos, voice notes, and reflections—while staying calm and private.',
				approach: [
					'Start with a timeline that feels easy to return to.',
					'Keep capture modes visible without making the interface feel busy.',
					'Use a soft visual language that gives personal content room to breathe.'
				],
				implementation: [
					'React Native for the mobile interface',
					'Expo for the application workflow',
					'Supabase for the product data layer'
				],
				outcome:
					'A focused product direction for turning small memories into an intentional, searchable personal archive.',
				nextStep:
					'Continue refining the capture flow, timeline interactions, and private sharing model.'
			}
		},
		{
			slug: 'hoobank',
			title: 'HooBank',
			label: 'Marketing interface',
			description:
				'A responsive finance landing page focused on visual hierarchy, reusable sections, and polished responsive behavior.',
			stack: ['React', 'Tailwind CSS'],
			isFeatured: true,
			thumbnail: hoobank,
			githubUrl: 'https://github.com/wyphyoez/hoobank',
			liveUrl: 'https://hoobank-wyp.vercel.app/',
			role: 'Frontend interface development',
			year: '2024',
			caseStudy: {
				overview:
					'A responsive finance landing page shaped around hierarchy, trust, and a clear path through product information.',
				challenge:
					'Make a dense financial product story feel approachable across screen sizes without losing its sense of momentum.',
				approach: [
					'Break the page into reusable visual sections.',
					'Use contrast and spacing to guide the reading order.',
					'Treat responsive behavior as part of the design rather than a final adjustment.'
				],
				implementation: [
					'React for component structure',
					'Tailwind CSS for responsive styling',
					'Reusable sections for consistent page rhythm'
				],
				outcome:
					'A polished marketing interface with stronger visual hierarchy and a more deliberate responsive system.',
				nextStep:
					'Extend the system with more content states and test the interface against real product conversion goals.'
			}
		},
		{
			slug: 'astro-portfolio',
			title: 'Astro Portfolio',
			label: 'Personal site',
			description:
				'A lightweight personal site exploring content-led layouts, project storytelling, and a quieter reading experience.',
			stack: ['Astro', 'MDX'],
			isFeatured: true,
			thumbnail: hoobank,
			githubUrl: 'https://github.com/uzzii-21/astro-portfolio',
			liveUrl: 'https://astro-portfolio-uzair.vercel.app/',
			role: 'Content-led frontend build',
			year: '2024',
			caseStudy: {
				overview:
					'A lightweight personal site exploring how content, navigation, and visual restraint can work together.',
				challenge:
					'Create a personal web presence that feels distinct without allowing decoration to compete with the work itself.',
				approach: [
					'Let typography establish the visual voice.',
					'Keep navigation simple and easy to escape.',
					'Use content structure to create the page rhythm.'
				],
				implementation: [
					'Astro for the site architecture',
					'MDX for content-led pages',
					'Responsive layout patterns for a focused reading experience'
				],
				outcome:
					'A quieter portfolio direction that treats the interface as a frame for the work and writing.',
				nextStep:
					'Grow the content system with deeper project narratives and a more connected writing archive.'
			}
		}
	]
};
