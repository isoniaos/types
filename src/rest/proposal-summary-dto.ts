import type { Address } from "../base/address";
import type { ChainId } from "../base/chain-id";
import type { NumericString } from "../base/numeric-string";
import { DataStatus } from "../enums/data-status";
import { ProposalStatus } from "../enums/proposal-status";
import { ProposalType } from "../enums/proposal-type";

export interface ProposalSummaryDto {
  readonly chainId: ChainId;
  readonly orgId: NumericString;
  readonly proposalId: NumericString;
  readonly proposalType: ProposalType;
  readonly policyVersion: NumericString;
  readonly title: string;
  readonly creatorAddress: Address;
  readonly status: ProposalStatus;
  readonly createdAtChain: NumericString;
  readonly dataStatus?: DataStatus;
}
