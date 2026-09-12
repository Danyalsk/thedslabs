# DSLabs — one company, many ways to create value

An image-led, responsive business ecosystem built with React, TypeScript, and Vite. The revised website presents DSLabs as an opportunity-driven parent company, using original artwork, varied editorial sections, and interactive exploration instead of a diagram-first presentation.

## Run locally

```sh
npm install
npm run dev
```

Open the URL printed by Vite (normally `http://127.0.0.1:5173`).

```sh
npm run typecheck
npm run build
npm run preview
```

Production files are written to `dist/`. Content, illustrations, and interactions are local. There is no backend, external font dependency, analytics service, or runtime API.

## Explore the site

- **Opportunity sources:** nine starting points, including market gaps, emerging behaviour, interesting technology, and ideas worth testing.
- **The DSLabs universe:** five possible outcomes, filtered by All possibilities, For clients, or Built by DSLabs. These are explicitly possibilities, not an existing portfolio.
- **Shared capabilities:** all nine areas with 176 detailed items. Try illustrative combinations for a software product, an existing business, or a physical product; every capability remains available.
- **The engine:** six selectable stages and all 14 steps from opportunity through scale. Select a stage or individual step to explore the process, with feedback returning to research.
- **Service-to-venture progression:** six connected, selectable steps from client work to a potential DSLabs venture.
- **Teams:** six illustrative opportunity teams, including improving an existing venture, with related capabilities and access to external specialists.
- **Accessibility:** keyboard navigation, visible focus, native modal dialogs with focus containment and restoration, reduced-motion support, and a mobile navigation menu.

The full-screen draggable atlas and zoom controls from the first version have been replaced by responsive sections and direct interaction. The compact DSLabs core graphic is one part of the capability explorer.

## Content and source

- `src/data.ts`: capabilities, relationships, sources, outcomes, engine steps, and teams.
- `src/capability-items.json`: the original 150 capability items plus 26 additions from the revised brief, with existing content retained.
- `src/App.tsx`: website sections and interaction state.
- `src/components.tsx`: shared controls, brand mark, and accessible detail drawer.
- `src/styles.css`: warm-paper, cobalt, sage, and apricot design system and responsive layouts.
- `public/images/`: two original images generated for this website with the built-in imagegen tool. They illustrate possible outputs and a way of working, rather than actual company holdings or staff. Final generation prompts and saved paths are documented in [docs/ARTWORK.md](docs/ARTWORK.md).

The WLDD reference informed the emphasis on typography, imagery, section variety, and ecosystem storytelling; the artwork, composition, colors, and brand treatment here are original to this implementation. No client names, holdings, achievements, or contact details have been invented.

## Verification

```sh
npm test
npm run format
```

Playwright uses installed Google Chrome (`channel: 'chrome'`) and starts the local dev server automatically. Install Chrome or update the channel in `playwright.config.ts` if using a different local browser.

The 27 desktop, tablet, and mobile checks cover image loading and runtime errors, all capability detail content, opportunity and outcome navigation, outcome filters, capability combinations, all creation stages and pathway steps, illustrative teams, keyboard focus, responsive navigation, reduced motion, horizontal overflow, and axe accessibility audits of both page and dialog. Screenshots are generated in `test-results/`.

Deployment and static export are not included.
# thedslabs
