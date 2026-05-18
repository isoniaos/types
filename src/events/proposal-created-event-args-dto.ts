import type { Address } from "../base/address";
import type { Bytes32Hash } from "../base/bytes32-hash";
import type { Bytes4Selector } from "../base/bytes4-selector";
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
  readonly actionSelector: Bytes4Selector;
  readonly dataHash: Bytes32Hash;
  readonly metadataUri: string;
}
