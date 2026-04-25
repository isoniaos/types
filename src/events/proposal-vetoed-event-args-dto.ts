import type { Address } from "../base/address";
import type { NumericString } from "../base/numeric-string";

export interface ProposalVetoedEventArgsDto {
  readonly orgId: NumericString;
  readonly proposalId: NumericString;
  readonly bodyId: NumericString;
  readonly actorAddress: Address;
}
