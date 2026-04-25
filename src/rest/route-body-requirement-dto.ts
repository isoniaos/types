import type { Address } from "../base/address";
import type { NumericString } from "../base/numeric-string";
import type { TransactionHash } from "../base/transaction-hash";

export interface RouteBodyRequirementDto {
  readonly bodyId: NumericString;
  readonly bodyName: string;
  readonly required: boolean;
  readonly approved: boolean;
  readonly approvedBy?: Address;
  readonly approvedAtChain?: NumericString;
  readonly txHash?: TransactionHash;
}
