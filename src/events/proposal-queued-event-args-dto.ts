import type { NumericString } from "../base/numeric-string";

export interface ProposalQueuedEventArgsDto {
  readonly orgId: NumericString;
  readonly proposalId: NumericString;
  readonly queuedAt: NumericString;
  readonly executableAt: NumericString;
}
