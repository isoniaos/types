import type { Address } from "../base/address";
import type { NumericString } from "../base/numeric-string";

export interface ProposalCancelledEventArgsDto {
  readonly orgId: NumericString;
  readonly proposalId: NumericString;
  readonly actorAddress: Address;
}
