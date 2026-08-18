# Responsive Review — Wai Yan Phyoe Portfolio

## Scope

The live Cloudflare Pages site was tested at representative viewport sizes using Chromium screenshots against `https://wyphyoez.cyou`. The review covered the Home, About, Articles, valid article detail, Projects, and Uses routes.

| Viewport    | Device class    | Primary purpose                                                                                     |
| ----------- | --------------- | --------------------------------------------------------------------------------------------------- |
| 390 × 844   | Mobile portrait | Check mobile Header controls, text wrapping, stacked sections, CTA width, card bounds, and overflow |
| 768 × 1024  | Tablet portrait | Check breakpoint transition, navigation mode, content measure, and intermediate spacing             |
| 1440 × 1000 | Desktop         | Check max-width behavior, two-column compositions, editorial reading width, and action alignment    |

## Results

| Route          | Mobile                                                                                                       | Tablet                                                                | Desktop                                                                                  | Result                                 |
| -------------- | ------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | -------------------------------------- |
| Home           | Circular theme/menu controls, stacked metadata, full-width CTAs, no visible clipping                         | Inline navigation, single-column hero with status card below          | Balanced two-column hero and status card                                                 | Pass                                   |
| About          | Four-line headline, readable long-form copy, value cards begin below the fold                                | Larger controlled headline and vertically stacked value cards         | Not separately captured in this pass; existing desktop treatment was previously verified | Pass for tested mobile/tablet layouts  |
| Articles       | Stacked heading, reading-list card, article rows, and metadata                                               | Numbered rail and right-side circular actions appear without crowding | Restrained max-width with spacious rows and aligned actions                              | Pass                                   |
| Article detail | Valid `/article/getting-started` route keeps title, metadata, preview, divider, and body inside the viewport | Not separately captured                                               | Comfortable editorial column and readable body width                                     | Pass for tested mobile/desktop layouts |
| Projects       | Full-width card, contained image badge/actions, clean title block                                            | Not separately captured                                               | Existing responsive grid rules are configured for wider layouts                          | Pass for tested mobile layout          |
| Uses           | Tool groups and pills wrap naturally                                                                         | Not separately captured                                               | Existing max-width/editorial layout retained                                             | Pass for tested mobile layout          |

## Header and overflow observations

At 390 × 844, the mobile Header displays the brand mark and handle with equal circular theme and menu buttons. At 768 × 1024 and 1440 × 1000, the navigation switches to the inline menu and the mobile control is hidden. The captured pages show no visible horizontal overflow, clipped controls, or content extending beyond the viewport. The Hero CTAs remain usable on mobile, and the project-card SVG actions stay inside the image bounds.

The captured live screenshots are stored in `/home/ubuntu/wyphyoez-responsive-review/`. The most representative files are `home-mobile.png`, `home-tablet.png`, `home-desktop.png`, `articles-mobile.png`, `articles-tablet.png`, `articles-desktop.png`, `article-detail-mobile-valid.png`, `article-detail-desktop-valid.png`, `projects-mobile.png`, `uses-mobile.png`, `about-mobile.png`, and `about-tablet.png`.

## Test-input correction

The first automated article-detail attempt used `/article/making-a-small-site-feel-finished`, which is not a deployed article slug. The site correctly rendered its `Post not found` fallback. The Articles index was then inspected to obtain the valid route `/article/getting-started`, and the detail page was retested successfully at mobile and desktop widths. This was a test-input issue rather than a responsive layout defect.

## Follow-up recommendations

The current evidence indicates that the responsive system is behaving as intended across the tested sizes. For a broader device matrix, the next useful checks would be a narrow 320–360px phone, a landscape tablet around 1024 × 768, and a very wide desktop above 1600px. Those additional checks are recommended for confidence, but no blocking layout regression was visible in this review.
