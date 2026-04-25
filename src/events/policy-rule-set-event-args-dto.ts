import type { NumericString } from "../base/numeric-string";
import { ProposalType } from "../enums/proposal-type";

export interface PolicyRuleSetEventArgsDto {
  readonly orgId: NumericString;
  readonly proposalType: ProposalType;
  readonly requiredApprovalBodies: readonly NumericString[];
  readonly vetoBodies: readonly NumericString[];
  readonly executorBody: NumericString;
  readonly timelockSeconds: NumericString;
  readonly enabled: boolean;
}
