import type { Address } from "../base/address";
import type { Bytes32Hash } from "../base/bytes32-hash";
import type { NumericString } from "../base/numeric-string";
import { ProposalType } from "../enums/proposal-type";

export interface ProposalCreatedEventArgsDto {
  readonly orgId: NumericString;
  readonly proposalId: NumericString;
  readonly proposalType: ProposalType;
  readonly policyVersion: NumericString;
  readonly creatorAddress: Address;
  readonly targetAddress: Address;
  readonly value: NumericString;
  readonly dataHash: Bytes32Hash;
  readonly metadataUri: string;
}
