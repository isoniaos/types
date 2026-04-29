import type { Address } from "../base/address";
import type { ChainId } from "../base/chain-id";
import type { NumericString } from "../base/numeric-string";
import type { TransactionHash } from "../base/transaction-hash";
import { BodyKind } from "../enums/body-kind";
import { ProposalType } from "../enums/proposal-type";
import { RoleType } from "../enums/role-type";
import { SetupActionExecutionStatus } from "../enums/setup-action-execution-status";
import { SetupActionKind } from "../enums/setup-action-kind";
import type { SetupValidationWarning } from "./setup-validation-warning";

export interface SetupEntityReference {
  readonly draftId?: string;
  readonly indexedId?: NumericString;
}

export interface SetupActionBase {
  readonly actionId: string;
  readonly kind: SetupActionKind;
  readonly label: string;
  readonly description?: string;
  readonly dependsOn: readonly string[];
  readonly executionStatus: SetupActionExecutionStatus;
  readonly expectedChainId?: ChainId;
  readonly expectedContractAddress?: Address;
  readonly requiredSignerAddress?: Address;
  readonly txHash?: TransactionHash;
  readonly indexedAt?: string;
  readonly warnings: readonly SetupValidationWarning[];
}

export interface CreateOrganizationSetupAction extends SetupActionBase {
  readonly kind: SetupActionKind.CreateOrganization;
  readonly organizationDraftId: string;
  readonly adminAddress: Address;
  readonly fallbackName: string;
  readonly metadataUri?: string;
  readonly orgId?: NumericString;
  readonly createdBlock?: NumericString;
  readonly createdTxHash?: TransactionHash;
}

export interface CreateBodySetupAction extends SetupActionBase {
  readonly kind: SetupActionKind.CreateBody;
  readonly organizationRef: SetupEntityReference;
  readonly bodyDraftId: string;
  readonly bodyKind: BodyKind;
  readonly fallbackName: string;
  readonly metadataUri?: string;
  readonly active: boolean;
  readonly bodyId?: NumericString;
}

export interface CreateRoleSetupAction extends SetupActionBase {
  readonly kind: SetupActionKind.CreateRole;
  readonly bodyRef: SetupEntityReference;
  readonly roleDraftId: string;
  readonly roleType: RoleType;
  readonly fallbackName: string;
  readonly metadataUri?: string;
  readonly active: boolean;
  readonly roleId?: NumericString;
}

export interface AssignMandateSetupAction extends SetupActionBase {
  readonly kind: SetupActionKind.AssignMandate;
  readonly roleRef: SetupEntityReference;
  readonly mandateDraftId: string;
  readonly holderAddress: Address;
  readonly startTime: NumericString;
  readonly endTime: NumericString;
  readonly proposalTypeMask: NumericString;
  readonly proposalTypes?: readonly ProposalType[];
  readonly spendingLimit: NumericString;
  readonly mandateId?: NumericString;
}

export interface SetPolicyRuleSetupAction extends SetupActionBase {
  readonly kind: SetupActionKind.SetPolicyRule;
  readonly organizationRef: SetupEntityReference;
  readonly proposalType: ProposalType;
  readonly requiredApprovalBodies: readonly SetupEntityReference[];
  readonly vetoBodies: readonly SetupEntityReference[];
  readonly executorBody?: SetupEntityReference;
  readonly timelockSeconds: NumericString;
  readonly enabled: boolean;
  readonly policyVersion?: NumericString;
}

export type SetupAction =
  | CreateOrganizationSetupAction
  | CreateBodySetupAction
  | CreateRoleSetupAction
  | AssignMandateSetupAction
  | SetPolicyRuleSetupAction;
