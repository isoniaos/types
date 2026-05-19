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
- organization finalization status, event, contract function, and blocked bootstrap admin operation types;
- v0.8 execution permission registry event and read-model DTOs;
- v0.8 managed execution receipt and org executor event/read-model DTOs;
- shared domain constants.

It must stay dependency-light and must not depend on React, NestJS, wagmi, viem, database libraries, Control Plane, App Core, SaaS, or SDK code.

## Install During Early Development

Until the public beta package registry release, depend on pinned GitHub tags.
For the current v0.8 accountability and integration preview baseline, after the matching tag is created, use:

```json
{
  "dependencies": {
    "@isonia/types": "github:isoniaos/types#v0.8.0-alpha.4"
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

## v0.8 Accountability and Integration Preview

v0.8 adds shared types for the Public Governance Archive, Basic Accountability Dashboard, and Integration Preview:

```ts
import {
  AccountabilityExecutionStatus,
  ExternalAuthorityClaim,
  ExternalResourceProvider,
  type AccountabilityRecordDto,
  type DecisionRecordDto,
  type ExternalResourceDto,
} from "@isonia/types";
```

The new surface includes `DecisionRecordDto`, `AccountabilityRecordDto`, `ExternalResourceDto`, source disclosures, source labels, trust boundaries, authority claims, public archive display states, accountability execution statuses, external import states, and observed transaction statuses.

v0.8 also includes shared execution permission registry types for the protocol's organization-scoped target and selector rules:

```ts
import {
  GovernanceEventName,
  type ExecutionTargetRuleUpdatedEventArgsDto,
  type ExecutionSelectorRuleUpdatedEventArgsDto,
  type OrganizationExecutionPermissionsDto,
  RouteBlockedReasonCode,
} from "@isonia/types";
```

The execution permission surface describes configured IsoniaOS protocol target rules, selector rules, update event arguments, and route blocked reason codes. It does not decode arbitrary customer target contracts or treat target contract events as governance authority.

Proposal action identity in the v0.8 protocol is represented as `targetAddress + value + actionSelector + dataHash`. `actionSelector` is a protocol-level bytes4 selector field for proposal identity and execution checks. It is not ABI decoding, does not imply customer-contract indexing, and does not make arbitrary target-contract events authoritative.

v0.8 managed execution receipts expose the canonical protocol execution receipt and org-scoped executor configuration without decoding customer ABIs:

```ts
import {
  GovernanceEventName,
  ProposalExecutionMode,
  type OrgExecutorDto,
  type OrgExecutorUpdatedEventArgsDto,
  type OrganizationManagedExecutionDto,
  type ProposalExecutedEventArgsDto,
  type ProposalExecutionReceiptDto,
} from "@isonia/types";
```

`ProposalExecutedEventArgsDto` mirrors the Solidity event shape, including `targetAddress`, `value`, `actionSelector`, `dataHash`, and `managedExecutorAddress`. The raw event DTO keeps `managedExecutorAddress` as an address even when it is the zero address. Higher-level read models can represent execution as `ProposalExecutionMode.Direct` or `ProposalExecutionMode.Managed` and may omit `managedExecutorAddress` when the receipt represents direct execution.

The proposal action identity remains final-target based: `targetAddress + value + actionSelector + dataHash`. Managed execution means the protocol forwarded execution through an org-scoped executor; it does not make target-contract events governance authority, add customer ABI decoding, or make IsoniaOS a global superadmin.

Contracts remain authoritative for modeled onchain governance state. External resources are evidence or context unless explicitly modeled as authoritative for a specific field. Manual accountability updates are annotations, not protocol truth.

`@isonia/types` only provides shared TypeScript types and constants. It does not execute transactions, parse external providers, verify proofs, import Snapshot/Safe/Tally/Agora records, or implement Control Plane endpoints, SDK clients, contracts, or UI behavior.

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

## v0.7 Bootstrap Finalization

v0.7 adds shared types for organization bootstrap finalization aligned with `evm-contracts@v0.7.0-alpha.3`:

```ts
import {
  GovernanceEventName,
  ORGANIZATION_FINALIZATION_CONTRACT_FUNCTION_NAMES,
  ORGANIZATION_FINALIZATION_STATUSES,
  POST_FINALIZATION_BLOCKED_BOOTSTRAP_ADMIN_OPERATIONS,
  type OrganizationFinalizationReadModelDto,
} from "@isonia/types";
```

The new types cover organization finalization status, lifecycle/read-model metadata, `OrganizationFinalized` event arguments, `finalizeOrganization` and `isOrganizationFinalized` contract function names, the `OrganizationAlreadyFinalized` contract error name, and the bootstrap admin operations blocked after finalization.

Finalization is irreversible in the current alpha. A finalized organization can still have the existing `Active` organization status and remain readable/proposal-capable; finalization is modeled as separate handoff metadata rather than a replacement for `OrganizationStatus.Active`.

After finalization, bootstrap admin mutations are blocked at the contract layer. Emergency/recovery and governance-controlled post-finalization changes remain future/open design areas and are not represented as implemented semantics in this package.

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
