import hoobank from '$lib/images/hoobank.png';

export const info = {
	baseUrl: 'https://wyphyoez.cyou',
	socialImage:
		'https://files.manuscdn.com/user_upload_by_module/session_file/310519663886508705/oncODtkEAdJjTaEQ.png',
	name: 'Wai Yan Phyoe',
	handle: '@wyphyoez',
	jobDescription: 'Full-Stack Web Developer',
	location: 'Meiktila, Myanmar',
	availability: 'Open to thoughtful product work',
	now: {
		updated: '2026-08-23',
		headline: 'Building with intention.',
		intro:
			'I’m refining the foundations of this portfolio: clearer project stories, easier conversations, and a more useful path from first visit to a real brief.',
		building: {
			title: 'A clearer portfolio system',
			text: 'Improving case studies, contact flow, and project context so the work is easier to understand.'
		},
		focus: {
			title: 'Useful front-end details',
			text: 'Paying attention to responsive behavior, accessible interactions, and the small decisions that make a product feel considered.'
		},
		learning: {
			title: 'Discoverability and writing',
			text: 'Practising clearer technical writing and strengthening the metadata that helps good work reach the right people.'
		}
	},
	about:
		'I build responsive web experiences and practical interfaces with a focus on clarity, maintainability, and the small details that make software feel considered. My work spans front-end systems, API integration, and the steady craft of learning in public.',
	navLinks: [
		{ path: '/', title: 'Home' },
		{ path: '/about', title: 'About' },
		{ path: '/articles', title: 'Articles' },
		{ path: '/projects', title: 'Projects' },
		{ path: '/uses', title: 'Uses' },
		{ path: '/now', title: 'Now' },
		{ path: '/contact', title: 'Contact' }
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
			slug: 'kyarbo',
			title: 'KyarBo: Myanmar Checkers',
			label: 'Myanmar checkers game',
			description:
				'A modern digital Myanmar checkers experience with a tactile board, guided practice, player profiles, and an edge-ready Cloudflare migration path.',
			stack: ['React', 'Cloudflare Pages', 'Cloudflare Workers', 'Cloudflare D1'],
			isFeatured: true,
			thumbnail:
				'https://files.manuscdn.com/user_upload_by_module/session_file/310519663886508705/pYnmdFZscjtINLtA.webp',
			role: 'Product design & full-stack development',
			year: '2026',
			caseStudy: {
				overview:
					'A focused Myanmar checkers product direction that combines a familiar game board with clearer practice, match, and player journeys—plus an isolated Cloudflare migration proof of concept.',
				challenge:
					'Make the game board feel tactile and readable while giving players clear routes into practice, online play, profiles, and game settings.',
				approach: [
					'Use an expressive burgundy-and-gold board to make the game state easy to scan.',
					'Structure the experience around practice, live matches, player context, and clear next actions.',
					'Keep feedback, move history, timers, and game controls visible without distracting from the board.',
					'Separate the Cloudflare migration work so it can evolve without affecting the existing production application.'
				],
				implementation: [
					'Cloudflare Pages-ready React PWA shell for the game, lobby, and player-interface experience',
					'Cloudflare Workers API proof of concept for health checks, game-service boundaries, and signed session handling',
					'Cloudflare D1 schema draft and local migrations for the planned game-data layer',
					'An auth-ready session boundary, prepared for a selected OAuth provider before staging activation'
				],
				outcome:
					'A detailed, playable product foundation with a Cloudflare Pages, Workers, and D1 migration path—kept isolated until staging resources and OAuth configuration are activated.',
				nextStep:
					'Create the isolated staging Pages, Worker, and D1 resources; complete OAuth setup; then rehearse the data migration before activating the Cloudflare path.'
			}
		}
	]
};
