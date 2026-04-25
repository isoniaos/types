import type { Address } from "../base/address";
import type { ChainId } from "../base/chain-id";
import type { NumericString } from "../base/numeric-string";
import type { TransactionHash } from "../base/transaction-hash";
import { DataStatus } from "../enums/data-status";
import { DecisionType } from "../enums/decision-type";

export interface ProposalDecisionDto {
  readonly chainId: ChainId;
  readonly orgId: NumericString;
  readonly proposalId: NumericString;
  readonly bodyId: NumericString;
  readonly actorAddress: Address;
  readonly decisionType: DecisionType;
  readonly blockNumber: NumericString;
  readonly txHash: TransactionHash;
  readonly decidedAtChain: NumericString;
  readonly dataStatus?: DataStatus;
}
