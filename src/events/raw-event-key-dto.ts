import type { ChainId } from "../base/chain-id";
import type { HexString } from "../base/hex-string";
import type { NumericString } from "../base/numeric-string";
import type { TransactionHash } from "../base/transaction-hash";

export interface RawEventKeyDto {
  readonly chainId: ChainId;
  readonly blockHash: HexString;
  readonly blockNumber: NumericString;
  readonly txHash: TransactionHash;
  readonly logIndex: number;
}
