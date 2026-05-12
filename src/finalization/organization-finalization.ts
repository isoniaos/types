import type { Address } from "../base/address";
import type { NumericString } from "../base/numeric-string";
import type { TransactionHash } from "../base/transaction-hash";
import type { OrganizationStatus } from "../enums/organization-status";
import type { BootstrapAdminOperation } from "./bootstrap-admin-operation";
import type { OrganizationFinalizationContractFunctionName } from "./contract-finalization";

export const ORGANIZATION_FINALIZATION_STATUSES = {
  Unsupported: "unsupported",
  Unknown: "unknown",
  NotFinalized: "not_finalized",
  Finalized: "finalized"
} as const;

export type OrganizationFinalizationStatus =
  (typeof ORGANIZATION_FINALIZATION_STATUSES)[keyof typeof ORGANIZATION_FINALIZATION_STATUSES];

export const ORGANIZATION_FINALIZATION_STATUS_VALUES = [
  ORGANIZATION_FINALIZATION_STATUSES.Unsupported,
  ORGANIZATION_FINALIZATION_STATUSES.Unknown,
  ORGANIZATION_FINALIZATION_STATUSES.NotFinalized,
  ORGANIZATION_FINALIZATION_STATUSES.Finalized
] as const satisfies readonly OrganizationFinalizationStatus[];

export const ORGANIZATION_LIFECYCLE_STATUSES = {
  Created: "created",
  Activating: "activating",
  ActiveNotFinalized: "active_not_finalized",
  Finalized: "finalized",
  Unknown: "unknown",
  Unsupported: "unsupported"
} as const;

export type OrganizationLifecycleStatus =
  (typeof ORGANIZATION_LIFECYCLE_STATUSES)[keyof typeof ORGANIZATION_LIFECYCLE_STATUSES];

export const ORGANIZATION_LIFECYCLE_STATUS_VALUES = [
  ORGANIZATION_LIFECYCLE_STATUSES.Created,
  ORGANIZATION_LIFECYCLE_STATUSES.Activating,
  ORGANIZATION_LIFECYCLE_STATUSES.ActiveNotFinalized,
  ORGANIZATION_LIFECYCLE_STATUSES.Finalized,
  ORGANIZATION_LIFECYCLE_STATUSES.Unknown,
  ORGANIZATION_LIFECYCLE_STATUSES.Unsupported
] as const satisfies readonly OrganizationLifecycleStatus[];

export const ORGANIZATION_FINALIZATION_CAPABILITY_STATUSES = {
  Supported: "supported",
  Unsupported: "unsupported",
  Unknown: "unknown"
} as const;

export type OrganizationFinalizationCapabilityStatus =
  (typeof ORGANIZATION_FINALIZATION_CAPABILITY_STATUSES)[keyof typeof ORGANIZATION_FINALIZATION_CAPABILITY_STATUSES];

export const ORGANIZATION_FINALIZATION_CAPABILITY_STATUS_VALUES = [
  ORGANIZATION_FINALIZATION_CAPABILITY_STATUSES.Supported,
  ORGANIZATION_FINALIZATION_CAPABILITY_STATUSES.Unsupported,
  ORGANIZATION_FINALIZATION_CAPABILITY_STATUSES.Unknown
] as const satisfies readonly OrganizationFinalizationCapabilityStatus[];

export interface OrganizationFinalizationCapability {
  readonly status: OrganizationFinalizationCapabilityStatus;
  readonly supportedFunctions: readonly OrganizationFinalizationContractFunctionName[];
}

export interface OrganizationFinalizationDerivedMetadata {
  readonly activeAndFinalized: boolean;
  readonly activeNotFinalized: boolean;
  readonly finalizationKnown: boolean;
  readonly finalizationSupported: boolean;
}

export interface OrganizationFinalizationReadModelDto {
  readonly orgId: NumericString;
  readonly organizationStatus: OrganizationStatus;
  readonly lifecycleStatus: OrganizationLifecycleStatus;
  readonly finalizationStatus: OrganizationFinalizationStatus;
  readonly finalized: boolean | null;
  readonly bootstrapAdminMutationsAllowed: boolean | null;
  readonly blockedBootstrapAdminOperations: readonly BootstrapAdminOperation[];
  readonly derived: OrganizationFinalizationDerivedMetadata;
  readonly finalizedBy?: Address;
  readonly finalizedBlock?: NumericString;
  readonly finalizedAt?: string;
  readonly finalizedTxHash?: TransactionHash;
}
