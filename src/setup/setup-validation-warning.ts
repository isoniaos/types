import { ProposalType } from "../enums/proposal-type";
import { SetupValidationWarningCode } from "../enums/setup-validation-warning-code";

export type SetupValidationWarningSeverity = "info" | "warning" | "error";

export interface SetupValidationWarning {
  readonly code: SetupValidationWarningCode;
  readonly severity: SetupValidationWarningSeverity;
  readonly message: string;
  readonly actionId?: string;
  readonly relatedBodyId?: string;
  readonly relatedRoleId?: string;
  readonly relatedMandateId?: string;
  readonly proposalType?: ProposalType;
}
