# Live Website Audit — Wai Yan Phyoe (@wyphyoez)

The deployed Cloudflare Pages homepage is reachable at `https://wyphyoez.pages.dev/` and returns a successful page response. The live page correctly shows the identity **Wai Yan Phyoe (@wyphyoez)** and uses a large gradient headline, a compact header, a dark-mode switch, a Resume link, a hero scroll cue, education cards, project cards, and a footer.

The strongest existing elements are the clear identity, the large typographic hero, and the simple route structure. The highest-impact weaknesses are that the Resume link still points to `https://google.com`, project cards reuse the same HooBank thumbnail for Astro Portfolio, the article route appears very bare, the hero has excessive empty vertical space before the next content block, social links still use the old `waiyanphioe` handle, project-card icon labels are generic `Social Media`, and the homepage copy is broad rather than outcome-oriented.

The upgrade should preserve the SvelteKit architecture and existing routes while improving content hierarchy, project credibility, route discoverability, contact/Resume trust signals, accessibility labels, and responsive rhythm. The design should remain recognizable rather than replacing the original identity wholesale.

## Local Upgrade Verification

The upgraded homepage now has a compact rounded navigation bar, a stronger dark-mode composition, a clear role label, distinct full name and handle, actionable hero CTAs, and a live-location card. The main content rhythm is much tighter than the original and the project cards now expose real source/live-preview labels.

The upgraded `/articles` route renders correctly with a field-notes header, numbered article rows, previews, dates, reading times, and pagination controls. The existing seed articles still include generic template content such as “Getting Started” and “Lorem Ipsum”; this is now clearly visible as a content-quality issue rather than a layout issue. Those articles should be replaced or rewritten in a future content pass using Wai Yan Phyoe’s actual notes.

The local article check exposed one remaining duplicate template entry: the original `articles/getting-started/index.md` file is still being globbed alongside the rewritten `articles/getting-started.md`. It should be removed or renamed so the public index contains only the three rewritten Wai Yan Phyoe notes.

Screenshot-driven revision: the Hero now uses a dark high-contrast panel with a mobile-safe type scale, full-width stacked CTAs, and the corrected `ask@wyphyoez.cyou` action. The Footer now uses a responsive identity/navigation grid, visible contact pill, two-column mobile links, and a separated metadata row to prevent clipping and awkward wrapping.

Visual verification: at 390px the Hero now presents a dark framed panel, fully stacked CTAs, readable `Wai Yan Phyoe` wrapping, and a contained Currently card without horizontal overflow. At desktop width the Hero resolves into a balanced two-column composition with the contextual card aligned to the right. The Footer source now uses a mobile-safe identity/navigation grid and email pill; it is ready for the same production deployment.

Responsive recovery findings: the mobile menu control is present in the DOM and toggles its `aria-expanded` state with the Svelte click handler. The regression was caused by mixing the repository’s custom max-width `md` breakpoint with the newly introduced min-width aliases; the Header now uses `minmd:hidden` for the mobile control and panel, while the desktop navigation remains `minmd:flex`. A 390px local screenshot confirms both theme and hamburger controls are visible.
