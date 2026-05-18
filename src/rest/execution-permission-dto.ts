import type { Address } from "../base/address";
import type { HexString } from "../base/hex-string";
import type { NumericString } from "../base/numeric-string";
import type { TransactionHash } from "../base/transaction-hash";

export interface ExecutionTargetRuleDto {
  readonly orgId: NumericString;
  readonly targetAddress: Address;
  readonly enabled: boolean;
  readonly maxValue: NumericString;
  readonly updatedAtBlockNumber?: NumericString;
  readonly updatedAtTxHash?: TransactionHash;
  readonly updatedByAddress?: Address;
}

export interface ExecutionSelectorRuleDto {
  readonly orgId: NumericString;
  readonly targetAddress: Address;
  /** Lowercase 0x-prefixed bytes4 selector. */
  readonly selector: HexString;
  readonly enabled: boolean;
  readonly updatedAtBlockNumber?: NumericString;
  readonly updatedAtTxHash?: TransactionHash;
  readonly updatedByAddress?: Address;
}

export interface ExecutionTargetPermissionDto extends ExecutionTargetRuleDto {
  readonly selectors: readonly ExecutionSelectorRuleDto[];
}

export interface OrganizationExecutionPermissionsDto {
  readonly orgId: NumericString;
  readonly targets: readonly ExecutionTargetPermissionDto[];
}
