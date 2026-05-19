import type { Address } from "../base/address";
import type { Bytes32Hash } from "../base/bytes32-hash";
import type { Bytes4Selector } from "../base/bytes4-selector";
import type { ChainId } from "../base/chain-id";
import type { NumericString } from "../base/numeric-string";
import type { TransactionHash } from "../base/transaction-hash";
import { DataStatus } from "../enums/data-status";
import { ProposalExecutionMode } from "../enums/proposal-execution-mode";
import { ProposalStatus } from "../enums/proposal-status";
import { ProposalType } from "../enums/proposal-type";
import type { ProposalExecutionReceiptDto } from "./proposal-execution-receipt-dto";

export interface ProposalDto {
  readonly chainId: ChainId;
  readonly orgId: NumericString;
  readonly proposalId: NumericString;
  readonly proposalType: ProposalType;
  readonly policyVersion: NumericString;
  readonly title: string;
  readonly descriptionUri?: string;
  readonly targetAddress?: Address;
  readonly value: NumericString;
  readonly actionSelector?: Bytes4Selector;
  readonly dataHash?: Bytes32Hash;
  readonly creatorAddress: Address;
  readonly status: ProposalStatus;
  readonly createdBlock: NumericString;
  readonly createdTxHash: TransactionHash;
  readonly createdAtChain: NumericString;
  readonly queuedAtChain?: NumericString;
  readonly executableAtChain?: NumericString;
  readonly executedAtChain?: NumericString;
  readonly executionMode?: ProposalExecutionMode;
  readonly managedExecutorAddress?: Address;
  readonly executionReceipt?: ProposalExecutionReceiptDto;
  readonly dataStatus?: DataStatus;
}
