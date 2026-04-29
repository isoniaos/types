import type { Address } from "../base/address";
import type { ChainId } from "../base/chain-id";
import type { NumericString } from "../base/numeric-string";
import { SetupDraftStatus } from "../enums/setup-draft-status";
import type { SetupAction } from "./setup-action";
import type { SetupValidationWarning } from "./setup-validation-warning";

export interface SetupDraftOrganization {
  readonly draftId: string;
  readonly orgId?: NumericString;
  readonly fallbackName: string;
  readonly metadataUri?: string;
  readonly adminAddress?: Address;
}

export interface SetupDraft {
  readonly draftId: string;
  readonly templateId?: string;
  readonly templateVersion?: string;
  readonly chainId: ChainId;
  readonly status: SetupDraftStatus;
  readonly organization?: SetupDraftOrganization;
  readonly actions: readonly SetupAction[];
  readonly warnings: readonly SetupValidationWarning[];
  readonly createdAt: string;
  readonly updatedAt: string;
}
