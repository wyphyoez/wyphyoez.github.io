# Wai Yan Phyoe Website Upgrade Scope

## Audit Summary

The site already has a recognizable identity, a working SvelteKit route structure, a strong typographic hero, dark-mode support, and a successful Cloudflare Pages build. The upgrade should preserve those strengths rather than replace the site with a new framework or unrelated visual language.

The most valuable improvements are concentrated in five areas. First, the homepage needs a clearer information hierarchy: the hero should communicate role, location, and practical focus; the education section should become a compact timeline; and projects should feel like selected work rather than two anonymous image tiles. Second, the current navigation contains a dead Resume link to Google and the mobile menu lacks explicit accessibility state. Third, the Articles route is functionally too bare, with no metadata rhythm, pagination controls, or explanatory context. Fourth, project cards reuse the HooBank image for unrelated work and use generic `Social Media` labels, which reduces trust and accessibility. Fifth, the metadata and social model should consistently use Wai Yan Phyoe and @wyphyoez while avoiding guessed social URLs.

## Implementation Priorities

The implementation will focus on a strong homepage polish pass, reusable accessible project cards, a useful article index, more deliberate metadata, and safe navigation. It will use existing Tailwind utilities and Svelte components, avoid backend changes, keep the Cloudflare adapter, and retain the current route names.

The new visual direction will remain bold and minimal: large editorial typography, a restrained cool-gradient accent, generous whitespace with a tighter content rhythm, soft surface panels, and explicit action labels. The goal is to make the site feel like a real working engineer's home base rather than a starter template.
