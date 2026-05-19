import type { Address } from "../base/address";
import type { Bytes32Hash } from "../base/bytes32-hash";
import type { Bytes4Selector } from "../base/bytes4-selector";
import type { NumericString } from "../base/numeric-string";
import { ProposalExecutionMode } from "../enums/proposal-execution-mode";

export interface ProposalExecutionReceiptDto {
  readonly orgId: NumericString;
  readonly proposalId: NumericString;
  readonly executorAddress: Address;
  readonly targetAddress: Address;
  readonly value: NumericString;
  readonly actionSelector: Bytes4Selector;
  readonly dataHash: Bytes32Hash;
  readonly executionMode: ProposalExecutionMode;
  readonly managedExecutorAddress?: Address;
  readonly transactionHash?: Bytes32Hash;
  readonly blockNumber?: NumericString;
  readonly observedAt?: string;
}
