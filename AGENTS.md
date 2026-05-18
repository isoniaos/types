# IsoniaOS Types Agent Rules

These rules apply to Codex and other AI agents working in `types`.

## Repository Purpose

`@isonia/types` is the dependency-light shared TypeScript package for DTOs, enums, event names, graph shapes, setup structures, source disclosure, accountability records, external resource shapes, and domain constants.

Add shared concepts here before duplicating them in downstream repositories.

## Boundaries

Allowed:

- shared DTOs and response shapes;
- shared event DTOs and event names;
- shared enums and constants;
- graph and route explanation DTOs;
- accountability, external resource, source disclosure, action metadata, deployment capability, and template shapes;
- narrow pure type helpers when they are dependency-free and behavior-neutral.

Not allowed:

- React, NestJS, viem, wagmi, database, app, SaaS, or provider UI dependencies;
- Control Plane projection behavior;
- SDK client behavior;
- protocol authority logic;
- provider API behavior;
- demo-stack or integration-lab fixture assumptions.

## Downstream Duplication Rule

Downstream repositories must not duplicate shared DTOs, enums, event names, or domain constants when they belong in `@isonia/types`.

When adding or changing a shared shape, update downstream code and docs in the same scoped change where practical.

## Versioning and Claims

- Keep package versions as SemVer without a leading `v`.
- Do not create Git tags automatically.
- Update `CHANGELOG.md` under `Unreleased` for user-visible type changes.
- Do not introduce production, audit, public beta, SaaS, legal, provider-completeness, or ISO launch-readiness claims.

## Verification

For type changes, run the strongest relevant subset:

- `corepack pnpm lint`
- `corepack pnpm test`
- `corepack pnpm build`
- `git diff --check`

For AGENTS-only changes, `git diff --check` is sufficient.
