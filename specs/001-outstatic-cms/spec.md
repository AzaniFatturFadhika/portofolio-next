# Feature Specification: Outstatic Content Management

**Feature Branch**: `feat/outstatic`

**Created**: 2026-10-20

**Status**: Draft

**Input**: User description: "Integrate Outstatic to this project."

## Clarifications

### Session 2026-10-20

- Q: Where must Outstatic-managed content appear? → A: Both the landing-page blog section and the dedicated blog listing/article pages read from the same managed content source.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Owner publishes an article without touching code (Priority: P1)

The site owner signs in to a content dashboard, writes or pastes an article with a title, summary, publication date, category, and body, saves it, and the article appears on the public site without any code change or redeploy authored by hand.

**Why this priority**: The entire value of the feature is decoupling publishing from development. If this journey does not work end to end, nothing else matters.

**Independent Test**: Sign in, create one draft and one published article, then confirm the public site shows exactly one new article and the draft is absent.

**Acceptance Scenarios**:

1. **Given** the owner is signed in, **When** they create an article with all required fields and mark it published, **Then** the article becomes reachable at its own public address without any code edit.
2. **Given** an article is saved as a draft, **When** a visitor browses the site, **Then** the draft is not listed, not linked, and not reachable by guessing its address.
3. **Given** an article is saved with no explicit address slug, **When** it is published, **Then** a readable, unique address is derived from its title.

---

### User Story 2 - Visitor reads articles on the existing blog pages (Priority: P1)

A visitor reaches the blog listing from the site navigation, sees the newest published articles with consistent metadata, opens one, and reads the full formatted body.

**Why this priority**: The publishing pipeline is only useful if the reader-facing surfaces consume it. This is the visible half of the MVP.

**Independent Test**: With at least three published articles, load the blog listing and one article detail page; verify titles, summaries, dates, categories, and body content match exactly what was saved.

**Acceptance Scenarios**:

1. **Given** published articles exist, **When** the visitor opens the blog listing, **Then** only published articles appear, newest first, each showing title, summary, date, reading time, and category.
2. **Given** a visitor opens an article, **When** the page renders, **Then** the body renders with headings, lists, links, code blocks, callouts, and images intact.
3. **Given** a visitor requests an address that does not match a published article, **When** the page resolves, **Then** a not-found response is shown and no error page is exposed.

---

### User Story 3 - Landing page highlights the newest writing (Priority: P2)

A visitor landing on the home page sees a writing section that automatically reflects the newest published articles, matching the blog pages in content and visual treatment.

**Why this priority**: It surfaces fresh content to recruiters without extra work, but the site remains usable without it.

**Independent Test**: Publish a new article, reload the home page, and confirm the writing section shows it in the correct position with identical metadata to the blog listing.

**Acceptance Scenarios**:

1. **Given** three or more published articles exist, **When** a visitor loads the home page, **Then** the writing section shows the three newest by publication date.
2. **Given** fewer than three published articles exist, **When** a visitor loads the home page, **Then** the section shows only the existing ones and does not render empty placeholders.
3. **Given** zero published articles exist, **When** a visitor loads the home page, **Then** the section shows a clear empty message and a working link to the blog page.

---

### User Story 4 - Existing content survives the migration (Priority: P2)

The three articles that exist today remain available at their current addresses with unchanged titles, summaries, dates, categories, and body content.

**Why this priority**: Breaking live URLs would lose search ranking and inbound links. It is a correctness requirement for the transition.

**Independent Test**: Compare each previously existing article's address, title, and body against the current published output.

**Acceptance Scenarios**:

1. **Given** the three existing articles, **When** the migration completes, **Then** each keeps its current address and all metadata values.
2. **Given** an inbound link to an old article, **When** a visitor follows it, **Then** the article loads without a redirect chain.

---

### Edge Cases

- An article body contains unsupported markup or raw HTML: it MUST render safely, with no script execution and no broken layout.
- An article is unpublished after having been public: its address MUST stop serving content and disappear from listings and feeds.
- Two articles resolve to the same derived address: the system MUST keep addresses unique and surface the conflict to the owner rather than silently overwriting.
- The content source is unreachable at build or request time: the site MUST still render, show the most recent successfully loaded content or an explicit unavailable state, and MUST NOT show invented or stale-as-fresh content.
- An article is published with an empty body or missing required field: saving MUST be rejected with a clear message.
- Images referenced by an article are missing: the article MUST still render, with the image omitted or replaced by a placeholder rather than breaking the page.
- Content contains very long words, large tables, or wide code blocks: the article page MUST remain readable at 320px width via horizontal scrolling containers.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The system MUST provide an authenticated content dashboard reachable at a dedicated site path, separate from public routes.
- **FR-002**: Access to the dashboard MUST be restricted to the site owner; unauthenticated requests MUST be denied rather than merely hidden.
- **FR-003**: Owners MUST be able to create, edit, unpublish, and delete articles.
- **FR-004**: Each article MUST support title, summary, publication date, category, reading time, optional cover image, address slug, and a rich body.
- **FR-005**: Articles MUST have an explicit lifecycle with at least `draft` and `published` states; only `published` content MAY be exposed publicly.
- **FR-006**: The blog listing page MUST source its items from managed content instead of a hardcoded list.
- **FR-007**: Each article MUST be reachable at a stable, human-readable address derived from a unique slug.
- **FR-008**: The article detail page MUST render the managed body as formatted content, preserving headings, lists, links, code, callouts, and images.
- **FR-009**: The landing-page writing section MUST source its items from the same managed content as the blog listing.
- **FR-010**: The landing-page writing section MUST show the newest published articles, limited to three, and MUST collapse gracefully when fewer exist.
- **FR-011**: Content MUST be written to and read from the repository that hosts the site, so that publishing produces a normal versioned change.
- **FR-012**: The existing three articles MUST be migrated with unchanged addresses, titles, summaries, dates, categories, and body content.
- **FR-013**: Article metadata (title, summary, cover image, canonical address) MUST continue to feed the site's existing SEO outputs, including page metadata, structured data, and the sitemap.
- **FR-014**: Site addresses generated from content MUST remain static where they are today, so public article pages do not become request-time-rendered.
- **FR-015**: All required configuration for the dashboard MUST be supplied through environment variables and MUST NOT be committed to the repository.
- **FR-016**: The dashboard and its API MUST NOT be linked from public navigation and MUST NOT be indexed by search engines.
- **FR-017**: Publishing or unpublishing an article MUST be reflected on the public site without a manual rebuild performed by the owner beyond saving in the dashboard.
- **FR-018**: Managed content types MUST be validated on save so that required fields cannot be empty and invalid content is rejected with a readable message.
- **FR-019**: The three public surfaces — landing-page writing section, blog listing, and article detail — MUST resolve content through one shared access path so their data cannot diverge.
- **FR-020**: Content operations MUST require no more than one owner action to become visible; saving a published article MUST be sufficient.

### Key Entities

- **Article**: The primary managed content item. Holds title, summary, publication date, category, reading time, optional cover image, unique address slug, lifecycle status, author identity, and the formatted body.
- **Article Collection**: The single managed grouping that holds all articles and defines which fields they carry.
- **Author**: The identity recorded on each article, derived from the owner's repository account.
- **Content Metadata Record**: The aggregate record the site reads to list articles, order them by date, and resolve addresses without opening every body.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: The owner can publish a new article and see it live on both the landing page and blog listing in under 2 minutes, with no code edit.
- **SC-002**: 100% of previously existing articles keep their addresses and metadata after migration.
- **SC-003**: A draft article is never reachable from any public surface, verified across landing page, listing, sitemap, and direct address access.
- **SC-004**: Article pages continue to load as pre-generated pages, with navigation from listing to article completing in under 1 second on a warm connection.
- **SC-005**: The landing-page writing section and the blog listing show identical titles, dates, and categories for the same articles in 100% of checks.
- **SC-006**: Adding, editing, or unpublishing an article requires zero developer involvement for routine content operations.
- **SC-007**: No unresolved accessibility violations are introduced on new or modified surfaces, verified by keyboard traversal and automated checks.

## Assumptions

- The owner has — or can create — a repository account application credential for dashboard sign-in, and can set environment variables in the hosting environment.
- Content is stored in the same repository as the site, so publishing is a versioned commit; this is acceptable for a single-owner portfolio.
- The existing blog routes, data-shape conventions, and UI primitives are reused rather than rebuilt; only the content source changes.
- The existing three articles are migrated manually or by a one-time import; no continuous two-way sync with the current hardcoded list is required.
- Reading time continues to be authored metadata rather than computed from body length.
- Localization is out of scope; article content is single-locale.
- Multi-author workflows, comments, scheduled publishing, and revision history beyond repository history are out of scope.

### Explicit scope boundaries

**In scope**: a private content dashboard embedded in the existing site; article authoring with
the fields in FR-004; draft/published lifecycle; landing-page writing section, blog listing, and
article detail all reading from managed content; migration of the three existing articles;
retention of current addresses, SEO metadata, and static generation.

**Out of scope**: managing non-article content (profile, skills, projects, experience, socials)
through the dashboard; editorial roles beyond the single owner; content localization; a separate
hosted CMS deployment; changing the visual design of the blog or landing page.
