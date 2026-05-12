import type { Address } from "../base/address";
import type { NumericString } from "../base/numeric-string";
import type { BodyKind } from "../enums/body-kind";
import type { ProposalType } from "../enums/proposal-type";
import type { RoleType } from "../enums/role-type";

export const ADMIN_BATCH_ACTIVATION_FUNCTION_NAMES = {
  BatchCreateBodies: "batchCreateBodies",
  BatchCreateRoles: "batchCreateRoles",
  BatchAssignMandates: "batchAssignMandates",
  BatchSetPolicyRules: "batchSetPolicyRules"
} as const;

export type AdminBatchActivationFunctionName =
  (typeof ADMIN_BATCH_ACTIVATION_FUNCTION_NAMES)[keyof typeof ADMIN_BATCH_ACTIVATION_FUNCTION_NAMES];

export const ADMIN_BATCH_ACTIVATION_FUNCTION_NAME_VALUES = [
  ADMIN_BATCH_ACTIVATION_FUNCTION_NAMES.BatchCreateBodies,
  ADMIN_BATCH_ACTIVATION_FUNCTION_NAMES.BatchCreateRoles,
  ADMIN_BATCH_ACTIVATION_FUNCTION_NAMES.BatchAssignMandates,
  ADMIN_BATCH_ACTIVATION_FUNCTION_NAMES.BatchSetPolicyRules
] as const satisfies readonly AdminBatchActivationFunctionName[];

export interface BodyCreateInput {
  readonly kind: BodyKind;
  readonly metadataURI: string;
}

export interface RoleCreateInput {
  readonly bodyId: NumericString;
  readonly roleType: RoleType;
  readonly metadataURI: string;
}

export interface MandateAssignInput {
  readonly roleId: NumericString;
  readonly holder: Address;
  readonly startTime: NumericString;
  readonly endTime: NumericString;
  readonly proposalTypeMask: NumericString;
  readonly spendingLimit: NumericString;
}

export interface PolicyRuleSetInput {
  readonly proposalType: ProposalType;
  readonly requiredApprovalBodies: readonly NumericString[];
  readonly vetoBodies: readonly NumericString[];
  readonly executorBody: NumericString;
  readonly timelockSeconds: NumericString;
  readonly enabled: boolean;
}

export interface BatchCreateBodiesInput {
  readonly orgId: NumericString;
  readonly inputs: readonly BodyCreateInput[];
}

export interface BatchCreateRolesInput {
  readonly orgId: NumericString;
  readonly inputs: readonly RoleCreateInput[];
}

export interface BatchAssignMandatesInput {
  readonly orgId: NumericString;
  readonly inputs: readonly MandateAssignInput[];
}

export interface BatchSetPolicyRulesInput {
  readonly orgId: NumericString;
  readonly inputs: readonly PolicyRuleSetInput[];
}
