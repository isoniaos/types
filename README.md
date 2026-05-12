# @isonia/types

Pure TypeScript shared domain types for IsoniaOS.

This package is the single shared type surface for IsoniaOS repositories, including contracts-adjacent tooling, Control Plane, SDK, App Core, and future SaaS code.

## Scope

`@isonia/types` contains:

- base branded/common TypeScript types;
- domain enums;
- chain enum mapping constants;
- governance event argument DTOs;
- raw event DTOs;
- REST response DTOs;
- Control Plane diagnostics DTOs;
- governance graph DTOs;
- setup draft and template DTOs;
- activation capability and typed contract batch activation input types;
- shared domain constants.

It must stay dependency-light and must not depend on React, NestJS, wagmi, viem, database libraries, Control Plane, App Core, SaaS, or SDK code.

## Install During Early Development

Until the public beta package registry release, depend on pinned GitHub tags.
For the closed v0.5 compatibility set, use:

```json
{
  "dependencies": {
    "@isonia/types": "github:isoniaos/types#v0.5.0-alpha.5"
  }
}
```

Do not depend on `master` for application or deployment code. Use a tag or immutable commit SHA so installs are reproducible.

## Usage

```ts
import {
  GovernanceEventName,
  type DiagnosticsDto,
  ProposalStatus,
  type ProposalRouteExplanationDto,
  RouteBlockedReasonCode,
  type SetupDraft,
  SetupActionKind,
} from "@isonia/types";
```

Subpath imports are also available:

```ts
import { PROPOSAL_TYPE_CHAIN_MAP } from "@isonia/types/constants/proposal-type-chain-map";
```

## v0.7 Typed Batch Activation

v0.7 adds shared types for the contract-level typed admin batch activation path:

```ts
import {
  ADMIN_BATCH_ACTIVATION_FUNCTION_NAMES,
  ActivationExecutionMode,
  type BodyCreateInput,
  type ContractBatchActivationSupport,
} from "@isonia/types";
```

These types describe the v0.7 `batchCreateBodies`, `batchCreateRoles`, `batchAssignMandates`, and `batchSetPolicyRules` inputs and capability state. Serial activation remains the compatibility fallback. EIP-5792 wallet batching is optional/prototype capability metadata, not the primary activation path.

`@isonia/types` only provides shared TypeScript types and constants. It does not execute transactions, encode ABI calldata, or import contract artifacts.

## Scripts

```txt
pnpm install
pnpm typecheck
pnpm build
```

The `prepare` script builds `dist` when the package is installed from GitHub.

## Release Checklist

For every change to shared types:

1. Update affected source files under `src/`.
2. Update `README.md` if usage, install, scope, or release guidance changes.
3. Update `CHANGELOG.md`.
4. Update matching documentation in the `isoniaos/docs` repository when DTOs, enums, events, constants, or API response shapes change.
5. Run `pnpm typecheck` and `pnpm build`.
6. Commit, push, and create a version tag such as `vX.Y.Z-alpha.N`.

## Versioning

Before public beta, releases are GitHub tags. After public beta, `@isonia/types` should move to a package registry with semver versions.
