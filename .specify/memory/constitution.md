<!--
Sync Impact Report
==================
Version change: 1.0.0 → 1.1.0
Bump rationale: MINOR. Three principles were renamed and materially expanded to make
code quality, testing, and UX consistency first-class, enforceable requirements. No
principle was removed, so existing code is not invalidated; the added obligations
expand what future work must satisfy.

Modified principles:
  - I. Decoupled, Typed Content (unchanged)
  - II. Next.js 16 App Router Conventions (unchanged)
  - III. Strict Type Safety & Naming Discipline → III. Code Quality & Naming Discipline
  - IV. Design System Fidelity & Accessibility → IV. UX Consistency & Accessibility
  - V. Verifiable Quality Gates → V. Testing & Verifiable Quality Gates

Added sections: none (existing sections expanded in place)

Removed sections: none

Deferred TODOs: none

Amendment focus (2026-10-20): code quality, testing, UX consistency.

Baseline evidence (repository scan, 2026-10-20):
  - Next.js 16.2.7, React 19.2.4, TypeScript 5 (strict), Tailwind CSS v4,
    ESLint 9 flat config, pnpm 11.5.1, Node 22, output "standalone".
  - Routes: src/app (home, /blog, /blog/[slug], robots.ts, sitemap.ts).
  - Content: src/data/* (profile, skills, projects, experience, navigation, socials),
    src/types/*, src/content/blog/*.mdx, src/components/{layout,sections,ui,mdx}.
  - Verification tooling present: `pnpm lint`, `pnpm build`. No test runner, no CI yet.
-->
# Fadhika Portfolio Constitution

## Core Principles

### I. Decoupled, Typed Content

All user-facing copy MUST live in `src/data/` (or in MDX frontmatter under
`src/content/blog/`) and MUST be typed by an interface declared in `src/types/`.
UI components in `src/components/` MUST NOT hardcode headings, biographies, project
descriptions, skill lists, navigation labels, or contact details.

- Content modules MUST export plain serializable data (no JSX, no React imports).
  Blog metadata stays in `src/data/blog.tsx` today; new data modules MUST use `.ts`.
- Every content collection MUST have an exported type; adding a field without updating
  the type is a violation.
- Dynamic content filenames MUST use kebab-case (e.g.
  `optimasi-performa-nextjs-app-router.mdx`).

Rationale: keeps editing content separate from editing markup, prevents silent drift
between data shape and rendering, and makes future CMS or i18n migration a data-layer
change rather than a rewrite.

### II. Next.js 16 App Router Conventions

The project targets Next.js 16 with the App Router and MUST follow its current request
APIs, not pre-16 patterns.

- Dynamic routes MUST treat `params` and `searchParams` as Promises and `await` them
  before access (e.g. `src/app/blog/[slug]/page.tsx`).
- Server Components MUST be the default. `"use client"` is permitted only for components
  that need state, effects, browser APIs, or event handlers, and MUST be applied at the
  smallest viable boundary.
- Static routes MUST stay statically renderable: dynamic blog pages MUST keep
  `generateStaticParams()` and MUST NOT introduce request-time-only dependencies.
- Route-level `metadata`/`generateMetadata` MUST be used for titles, descriptions, and
  canonical data. New public routes MUST be added to `src/app/sitemap.ts`.
- Before using any Next.js API, the implementer MUST consult the versioned docs in
  `node_modules/next/dist/docs/`; training-data patterns are not authoritative.

Rationale: Next.js 16 removed several synchronous route APIs; using stale patterns
causes deprecation warnings, broken builds, or silent loss of static optimization.

### III. Code Quality & Naming Discipline

TypeScript `strict` mode MUST remain enabled and MUST NOT be weakened. Readability and
reviewability are release criteria, not preferences.

**Type safety**

- `any` MUST NOT be introduced. Use explicit types, generics, or `unknown` plus narrowing.
- Types and interfaces MUST be declared in `src/types/` (or exported from the data module
  that owns them) and imported via the `@/*` path alias; relative cross-directory imports
  that climb out of `src/` are prohibited.
- Every exported function that crosses a module boundary MUST declare its return type.
  Inference is acceptable only for trivial local helpers.

**Naming**

- PascalCase for component files and exports, camelCase for variables/functions,
  kebab-case for content and dynamic-route segments, UPPER_SNAKE_CASE for constants that
  are truly global.
- Booleans MUST read as predicates (`isOpen`, `hasError`, `canSubmit`); handlers MUST use
  the `handleX` form. Abbreviations outside an established project vocabulary are
  prohibited.

**Component hygiene**

- A component MUST do one thing. When a file exceeds roughly 200 lines, or a component
  mixes data fetching, transformation, and presentation, it MUST be split.
- Duplicated markup appearing three or more times MUST be extracted into a component or a
  mapping over data. Copy-pasted blocks are a defect.
- Props MUST be typed by a named interface, not an inline object literal, when they exceed
  two fields or are reused.
- Accessibility attributes of interactive elements are part of the component contract and
  MUST be present from the first commit, not added later.

**Dead code and suppressions**

- Unused code MUST be deleted rather than commented out.
- ESLint warnings MUST NOT be silenced with blanket disables; a suppression MUST be
  line-scoped and justified inline.

Rationale: strict typing is the primary defect-prevention mechanism in a small codebase;
predictable naming and small, single-purpose components keep diffs reviewable and keep the
component/data split obvious.

### IV. UX Consistency & Accessibility

Visual decisions MUST flow through the existing theme system and MUST reuse existing
patterns before new ones are introduced.

**Design tokens**

- Colors, radii, shadows, and fonts MUST be expressed as Tailwind utilities backed by the
  CSS variables declared in `src/app/globals.css` (`--background`, `--foreground`,
  `--card`, `--primary`, `--secondary`, `--accent`, `--muted`, `--border`, ...). New raw
  hex/RGB values inside components are prohibited; add a variable instead.
- Every new surface MUST be verified in both light and dark themes; `dark:` overrides are
  allowed only where the variable mapping is insufficient.

**Consistency**

- New UI MUST compose the existing primitives (`Button`, `Card`, `Container`, `Input`,
  `Textarea`, `Toast`) before a new primitive is created. A new primitive is justified only
  when no existing one can be extended, and it MUST live in `src/components/ui/`.
- Layout rhythm MUST follow the established scale: sections use `py-24`, cards and panels
  use `rounded-2xl`, and page gutters come from `Container`. Ad-hoc one-off spacing or
  radius values MUST NOT be introduced.
- Repeated presentation logic (badges, section headers, metadata rows, empty states) MUST
  be a shared component so the same information looks identical everywhere.
- Section headings, metadata formatting, and date/label casing MUST match the closest
  existing section. Introducing a second visual treatment for the same concept is a
  defect.

**Accessibility**

- Category and action icons MUST come from `lucide-react`. Brand icons (GitHub, LinkedIn,
  Instagram, and similar) MUST be inline SVG because Lucide no longer ships them.
- Layouts MUST remain usable from 320px to desktop widths, using the shared `Container`
  component for page-level gutters.
- Interactive elements MUST be real buttons or links with accessible names, visible focus
  states (`focus-visible`/`focus:ring-*`), and keyboard operability. External links MUST
  include `rel="noopener noreferrer"` and `target="_blank"`.
- Every component that communicates state (loading, error, success, empty) MUST render an
  explicit, readable state rather than a blank area.
- Animations MUST respect `prefers-reduced-motion` when they are decorative or looping.

Rationale: a single runtime-driven token set plus reused primitives keeps themes and
page-to-page experience consistent, and accessibility requirements are cheapest to satisfy
at implementation time.

### V. Testing & Verifiable Quality Gates

Work is not complete until it is verified with the repository's own tooling and, where
the change is testable, with automated tests.

**Automated testing**

- A test runner MUST be part of the project's tooling, exposed through `pnpm test`.
  Introducing it is the first obligation of any change that adds non-trivial logic.
- Tests are REQUIRED for: data transforms, validation rules, filtering/search logic,
  sorting, slug derivation, metadata/JSON-LD generation, and any function with a branch.
- Tests are NOT required for purely presentational markup or static content files, but
  those changes MUST still be verified manually in the affected route.
- Unit tests MUST be deterministic and independent: no reliance on the network, current
  time, locale of the machine, or ordering between tests.
- A bug fix MUST include a regression test that fails before the fix and passes after it,
  unless the fix is purely visual.
- Tests MUST assert observable behavior, not implementation internals; a refactor that
  preserves behavior MUST NOT require rewriting tests.

**Required gates**

- `pnpm lint`, `pnpm test`, and `pnpm build` MUST all pass before a change is considered
  done. A failing gate is a blocking defect, not a follow-up task.
- Behavior changes MUST be validated by exercising the affected route or component in a
  running app when they are not covered by automation.

**Rendering and SEO**

- Rendering MUST NOT regress static generation: blog slugs are pre-rendered, and new
  pages MUST state their rendering strategy explicitly.
- Public pages MUST keep complete SEO output: title/description metadata, Open Graph and
  Twitter tags, JSON-LD where applicable (`src/lib/jsonld.ts`), and sitemap entries.

Rationale: the repository has no CI, so local gates are the only thing preventing broken
deployments; without tests, regressions in data and metadata logic surface only in
production.

## Technology & Platform Constraints

- Runtime and toolchain: Node.js 22 LTS, pnpm 11 (`preinstall` enforces pnpm), Next.js
  16.2.x, React 19.2.x, TypeScript 5 with `strict`, ESLint 9 flat config.
- Styling: Tailwind CSS v4 configured through CSS (`@import "tailwindcss"` plus
  `@theme inline` in `src/app/globals.css`). A `tailwind.config.*` file MUST NOT be added.
- Content: MDX via `@next/mdx` with `remark-gfm`; page extensions are declared in
  `next.config.mjs`. MDX components are registered in `src/mdx-components.tsx`.
- Icons and motion: `lucide-react` and `framer-motion` are the approved libraries.
- Deployment target: `output: "standalone"` MUST be preserved so container and platform
  builds keep working.
- New runtime dependencies MUST be justified against an existing capability in this
  stack; duplicating a solved concern (icons, animation, metadata) is prohibited.
- Testing tooling MUST be minimal and colocated with the code it covers: a single runner
  plus its assertions library, with tests named `*.test.ts` / `*.test.tsx` next to the
  module under test or under `src/__tests__/`. Multiple overlapping runners are prohibited.
- Secrets MUST NOT be committed. Only `NEXT_PUBLIC_*` values may reach the client, and
  they MUST be declared in `.env` and documented in `README.md`. Any new required
  environment variable MUST also be documented in the same change.

## Development Workflow & Documentation Duties

- Feature work MUST follow the Spec Kit flow: specification, plan, tasks, then
  implementation. Each artifact MUST be committed alongside the code it describes.
- Content and copy changes MUST update `src/data/` first, then the component.
- A change that alters routes, data flow, or rendering strategy MUST update
  `docs/architecture.md`; a change that alters user-facing behavior MUST update
  `docs/features.md`.
- Release-visible changes MUST be recorded in `CHANGELOG.md` under a SemVer heading,
  following the existing Keep a Changelog style.
- Commits MUST be scoped and use the existing conventional prefixes (`feat:`, `fix:`,
  `refactor:`, `docs:`, `chore:`, `init:`).
- Self-review before completion MUST cover: light/dark rendering, 320px layout, keyboard
  navigation of new interactive elements, and consistency with the nearest existing
  section. Findings MUST be fixed, not deferred.
- `CLAUDE.md` and `AGENTS.md` hold agent-facing operating notes. Where they conflict with
  this constitution, this constitution wins and the note MUST be corrected.

## Governance

This constitution supersedes ad-hoc conventions in `CLAUDE.md`, `AGENTS.md`, `README.md`,
and code comments. When a practice is not covered here, existing code style is the
tie-breaker, and the gap SHOULD be closed by an amendment rather than by unilateral
divergence.

Amendments:

1. Propose the change with its rationale and the affected principles.
2. Update this file, including the Sync Impact Report and the version line.
3. Update dependent artifacts in the same change: `docs/architecture.md`,
   `docs/features.md`, `README.md`, and `CLAUDE.md` when their guidance is invalidated.
4. Record the amendment as a `docs:` commit that states the new version.

Versioning policy (SemVer applied to governance):

- MAJOR: a principle is removed or redefined such that existing code becomes
  non-compliant.
- MINOR: a new principle or section is added, or existing guidance is materially expanded.
- PATCH: clarifications, wording, and typo fixes with no semantic change.

Compliance review:

- Every change MUST be checked against the five principles before completion.
- A violation MUST be fixed or explicitly recorded as a tracked debt item with a
  follow-up task; silent exceptions are not permitted.
- Complexity that bypasses a principle MUST be justified in the change description.
- Code-quality regressions (duplicated markup, oversized components, unsafe types) and
  UX-consistency regressions (new one-off styling, divergent patterns for an existing
  concept) block review approval regardless of functional correctness.
- Missing tests for required logic are a compliance failure, not a style preference.

**Version**: 1.1.0 | **Ratified**: 2026-10-20 | **Last Amended**: 2026-10-20
