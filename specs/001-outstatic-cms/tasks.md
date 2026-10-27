# Tasks: Outstatic Content Management

**Input**: Design documents from `/specs/001-outstatic-cms/`

**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Tests included (16 vitest tests covering data layer, slug uniqueness, draft filtering, SEO helpers).

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- **Single project**: `src/`, `tests/` at repository root
- **Web app**: `backend/src/`, `frontend/src/`
- **Mobile**: `api/src/`, `ios/src/` or `android/src/`
- Paths shown below assume single project - adjust based on plan.md structure

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Install Outstatic runtime dependency (`outstatic`) in package.json
- [x] T002 [P] Install markdown pipeline deps (`gray-matter`, `markdown-to-jsx`) in package.json
- [x] T003 [P] Install test runner (`vitest`) with test script in package.json
- [x] T004 Pin Tailwind CSS version to restore v3 behavior in package.json
- [x] T005 Add CMS env vars (`OST_GITHUB_ID`, `OST_GITHUB_SECRET`, `OST_TOKEN`, `OST_CONTENT_PATH`) to `.env.example`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T006 Define Article and metadata types in `src/types/article.ts`
- [x] T007 Implement shared content access path in `src/lib/articles.ts` (list, get-by-slug, published-only filter, date ordering)
- [x] T008 Implement CMS collection config in `src/lib/cms.ts` (article fields, validation, slug uniqueness)
- [x] T009 Configure error handling for unreachable content source (fallback to last-loaded content / unavailable state) in `src/lib/articles.ts`

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Owner publishes an article without touching code (Priority: P1) 🎯 MVP

**Goal**: Authenticated dashboard at dedicated path; create/edit/unpublish/delete with draft/published lifecycle

**Independent Test**: Sign in, create one draft and one published article, confirm public site shows exactly one new article and draft absent

### Tests for User Story 1

- [x] T010 [P] [US1] Unit test draft exclusion from public listings in `tests/unit/articles.test.ts`
- [x] T011 [P] [US1] Unit test slug derivation and uniqueness conflict surfacing in `tests/unit/cms.test.ts`

### Implementation for User Story 1

- [x] T012 [US1] Create CMS route group in `src/app/(cms)/outstatic/[[...ost]]/page.tsx` (dashboard, no public nav link, noindex)
- [x] T013 [US1] Create CMS API route in `src/app/api/outstatic/[[...ost]]/route.ts` (owner-only auth via env credentials)
- [x] T014 [US1] Enforce required-field validation with readable messages in `src/lib/cms.ts`
- [x] T015 [US1] Verify save-published reflects publicly without manual rebuild (Outstatic commit-backed content in `outstatic/content/articles/`)

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Visitor reads articles on the existing blog pages (Priority: P1)

**Goal**: Blog listing and detail pages read from managed content with full body rendering

**Independent Test**: With 3 published articles, load listing and one detail page; verify titles, summaries, dates, categories, body match saved content

### Tests for User Story 2

- [x] T016 [P] [US2] Unit test published-only ordering (newest first) in `tests/unit/articles.test.ts`
- [x] T017 [P] [US2] Unit test unknown-slug not-found resolution in `tests/unit/articles.test.ts`

### Implementation for User Story 2

- [x] T018 [P] [US2] Create safe markdown renderer (`ArticleBody`) in `src/components/blog/ArticleBody.tsx` (headings, lists, links, code, callouts, images; raw HTML sanitized, no script execution)
- [x] T019 [P] [US2] Create shared blog UI components in `src/components/blog/` (cards, badges, metadata)
- [x] T020 [US2] Rewrite blog listing in `src/app/blog/page.tsx` to source from `src/lib/articles.ts` (static generation preserved)
- [x] T021 [US2] Rewrite article detail in `src/app/blog/[slug]/page.tsx` to source from `src/lib/articles.ts` (async params, not-found on draft/unknown, 320px overflow-safe layout)

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - Landing page highlights the newest writing (Priority: P2)

**Goal**: Home writing section shows 3 newest published articles from same source with graceful empty states

**Independent Test**: Publish new article, reload home, confirm correct position with metadata identical to listing

### Tests for User Story 3

- [x] T022 [P] [US3] Unit test newest-three limit in `tests/unit/articles.test.ts`
- [x] T023 [P] [US3] Unit test fewer-than-three and zero-article collapse behavior in `tests/unit/articles.test.ts`

### Implementation for User Story 3

- [x] T024 [US3] Rewrite landing writing section in `src/components/sections/WritingSection.tsx` to read via `src/lib/articles.ts` (newest 3, empty message + blog link when zero)

**Checkpoint**: All user stories should now be independently functional

---

## Phase 6: User Story 4 - Existing content survives the migration (Priority: P2)

**Goal**: 3 existing articles migrated with unchanged slugs, metadata, and body

**Independent Test**: Compare each old article address, title, body against published output

### Implementation for User Story 4

- [x] T025 [P] [US4] Migrate article 1 to `outstatic/content/articles/` preserving slug and frontmatter
- [x] T026 [P] [US4] Migrate article 2 to `outstatic/content/articles/` preserving slug and frontmatter
- [x] T027 [P] [US4] Migrate article 3 to `outstatic/content/articles/` preserving slug and frontmatter
- [x] T028 [US4] Verify no redirect chains on old inbound links (stable slugs, static pages)

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [x] T029 [P] Feed article metadata into SEO outputs: page metadata + JSON-LD in `src/app/blog/[slug]/page.tsx`
- [x] T030 [P] Regenerate `src/app/sitemap.ts` and `src/app/robots.ts` from managed content (published only, drafts excluded)
- [x] T031 [P] Additional unit tests to reach 16 total in `tests/unit/` (reading time, cover image, canonical address)
- [x] T032 Cleanup: delete hardcoded source `src/data/blog.tsx` and legacy dir `src/content/blog`
- [x] T033 Documentation and env updates in `README.md` and `.env.example` (dashboard path, GitHub OAuth setup)
- [x] T034 Run verification gates: `pnpm lint`, `pnpm build`, `pnpm test` (all green)

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phases 3-6)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P2)
- **Polish (Phase 7)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P1)**: Can start after Foundational (Phase 2) - May integrate with US1 but should be independently testable
- **User Story 3 (P2)**: Can start after Foundational (Phase 2) - May integrate with US1/US2 but should be independently testable
- **User Story 4 (P2)**: Can start after Foundational (Phase 2) - May integrate with US1/US2 but should be independently testable

### Within Each User Story

- Tests (if included) MUST be written and FAIL before implementation
- Models before services
- Services before endpoints
- Core implementation before integration
- Story complete before moving to next priority

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- Once Foundational phase completes, all user stories can start in parallel (if team capacity allows)
- All tests for a user story marked [P] can run in parallel
- Models within a story marked [P] can run in parallel
- Different user stories can be worked on in parallel by different team members

---

## Parallel Example: User Story 1

```bash
# Launch all tests for User Story 1 together (if tests requested):
Task: "Unit test draft exclusion from public listings in tests/unit/articles.test.ts"
Task: "Unit test slug derivation and uniqueness conflict surfacing in tests/unit/cms.test.ts"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 3 → Test independently → Deploy/Demo
5. Add User Story 4 → Test independently → Deploy/Demo
6. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1
   - Developer B: User Story 2
   - Developer C: User Story 3
   - Developer D: User Story 4
3. Stories complete and integrate independently

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Verify tests fail before implementing
- Commit after each task or logical group
- All tasks marked complete: implementation already done, this file records completed work
