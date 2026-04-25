import type { Address } from "../base/address";
import type { Bytes32Hash } from "../base/bytes32-hash";
import type { ChainId } from "../base/chain-id";
import type { NumericString } from "../base/numeric-string";
import type { TransactionHash } from "../base/transaction-hash";
import { DataStatus } from "../enums/data-status";
import { ProposalStatus } from "../enums/proposal-status";
import { ProposalType } from "../enums/proposal-type";

export interface ProposalDto {
  readonly chainId: ChainId;
  readonly orgId: NumericString;
  readonly proposalId: NumericString;
  readonly proposalType: ProposalType;
  readonly title: string;
  readonly descriptionUri?: string;
  readonly targetAddress?: Address;
  readonly value: NumericString;
  readonly dataHash?: Bytes32Hash;
  readonly creatorAddress: Address;
  readonly status: ProposalStatus;
  readonly createdBlock: NumericString;
  readonly createdTxHash: TransactionHash;
  readonly createdAtChain: NumericString;
  readonly queuedAtChain?: NumericString;
  readonly executableAtChain?: NumericString;
  readonly executedAtChain?: NumericString;
  readonly dataStatus?: DataStatus;
}
