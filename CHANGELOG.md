# Changelog

All notable changes to `@isonia/types` are documented here.

`package.json.version` uses SemVer without a leading `v`. Git tags use the matching version with a leading `v`, and GitHub dependency refs may point at those tags.

During early development, versions are released as GitHub tags. Public package registry publication is deferred until public beta.

## [Unreleased]

### Added

- Added v0.7 shared types and constants for typed contract admin batch activation inputs, function names, and activation capability metadata.

## [0.6.0-alpha.2]

### Changed

- Updated the package Node engine baseline to `>=22` and added repository line-ending policy for v0.6 hardening.
- Prepared repository context for v0.6 alpha work after the closed v0.5 compatibility set.
- Updated package metadata and README examples for the v0.5 Developer Preview compatibility set.

## [0.5.0-alpha.4]

### Added

- Added REST DTOs for Control Plane indexer runtime diagnostics and process heartbeat state.

### Changed

- Normalized changelog sections so new entries start under `Unreleased`.
- Split v0.5 setup and policy-list changes out of the historical 0.1.0 section.
- Refreshed README install and release-checklist examples for the v0.5 Developer Preview compatibility set.
- Added shared setup warning codes for invalid addresses and zero-address authority.
- Added `missing_action_dependency` for setup drafts with unresolved action or entity dependencies.

## [0.5.0-alpha.2]

### Added

- v0.5 setup and template DTOs for setup drafts, template descriptors, setup actions, execution states, and validation warning codes.
- Organization policy list DTO aliases for the required v0.5 policy list REST endpoint.

## [0.1.0]

### Added

- Base shared scalar types for addresses, chain IDs, hashes, transaction hashes, numeric strings, hex strings, and JSON objects.
- Domain enums for organizations, bodies, roles, proposals, decisions, raw event status, governance event names, graph nodes, graph edges, and route blocked reasons.
- Chain enum mapping constants for Solidity enum decoding.
- Governance event argument DTOs.
- Raw event DTOs and raw event identity DTOs.
- REST DTOs for organizations, bodies, roles, mandates, policy rules, proposals, route explanations, and decisions.
- REST diagnostics DTOs for Control Plane indexing, projection, chain, and stale data status.
- Governance graph DTOs.
- Domain constants for event names and raw event identity fields.
- `policy_snapshot_missing` route blocked reason for versioned proposal route explanations.

[Unreleased]: https://github.com/isoniaos/types/compare/v0.5.0-alpha.5...HEAD
[0.6.0-alpha.2]: https://github.com/isoniaos/types/releases/tag/v0.6.0-alpha.2
[0.5.0-alpha.4]: https://github.com/isoniaos/types/releases/tag/v0.5.0-alpha.4
[0.5.0-alpha.2]: https://github.com/isoniaos/types/releases/tag/v0.5.0-alpha.2
[0.1.0]: https://github.com/isoniaos/types/releases/tag/v0.1.0
