import type { ChainId } from "../base/chain-id";
import type { NumericString } from "../base/numeric-string";
import type { TransactionHash } from "../base/transaction-hash";

export interface RawEventKeyDto {
  readonly chainId: ChainId;
  readonly blockNumber: NumericString;
  readonly txHash: TransactionHash;
  readonly logIndex: number;
}
