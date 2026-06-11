# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start Vite dev server at http://localhost:5173
npm run build    # tsc + vite build (outputs to dist/)
npm run preview  # serve the production build locally
npx tsc --noEmit # type-check without building
```

There are no tests configured.

## Architecture

Single-page marketing site built with Vite + React + TypeScript + Tailwind CSS.

**Two sections, rendered in `App.tsx`:**

- **`HeroSection`** — full-viewport hero with the `LogoBadge` (company name pill), large serif headline, subtitle, and a text input card. The input card contains `IntegrationIcons` (inline SVG icons for Slack, Instagram, Notion, HubSpot, LinkedIn) and a "+500 more" label.

- **`WorkflowsSection`** — two-column layout. Left: `WorkflowList`, an interactive numbered list of four workflow items (Sales copilot, Content copilot, Marketing intelligence, Project management) where clicking an item expands its description and tool tags. Right: `SalesAgentDemo`, a static mock of a Sales Agent activity card that includes `MiniSparkline` (a pure-SVG email engagement chart).

**Styling:** Tailwind utility classes throughout. Colors are mostly written as inline hex values (e.g. `text-[#1a1a1a]`, `bg-[#e8e2d5]`) rather than Tailwind theme tokens. The warm beige page background is `#e8e2d5`. Fonts are loaded from Google Fonts — Playfair Display (serif headings) and Inter (body/UI).
