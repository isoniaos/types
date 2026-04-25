import type { Address } from "../base/address";
import type { NumericString } from "../base/numeric-string";
import type { TransactionHash } from "../base/transaction-hash";

export interface RouteBodyVetoDto {
  readonly bodyId: NumericString;
  readonly bodyName: string;
  readonly canVeto: boolean;
  readonly vetoed: boolean;
  readonly vetoedBy?: Address;
  readonly vetoedAtChain?: NumericString;
  readonly txHash?: TransactionHash;
}
