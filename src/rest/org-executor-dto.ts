import type { Address } from "../base/address";
import type { Bytes32Hash } from "../base/bytes32-hash";
import type { NumericString } from "../base/numeric-string";

export interface OrgExecutorDto {
  readonly orgId: NumericString;
  readonly executorAddress?: Address;
  readonly previousExecutorAddress?: Address;
  readonly updatedByAddress?: Address;
  readonly updatedAt?: string;
  readonly transactionHash?: Bytes32Hash;
  readonly blockNumber?: NumericString;
}
