import type { Address } from "../base/address";
import type { Bytes32Hash } from "../base/bytes32-hash";
import type { NumericString } from "../base/numeric-string";

export interface ProposalExecutedEventArgsDto {
  readonly orgId: NumericString;
  readonly proposalId: NumericString;
  readonly executorAddress: Address;
  readonly targetAddress: Address;
  readonly dataHash: Bytes32Hash;
}
