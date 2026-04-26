import type { NumericString } from "../base/numeric-string";
import { ProposalStatus } from "../enums/proposal-status";

export interface ProposalStatusChangedEventArgsDto {
  readonly orgId: NumericString;
  readonly proposalId: NumericString;
  readonly previousStatus: ProposalStatus;
  readonly newStatus: ProposalStatus;
}
