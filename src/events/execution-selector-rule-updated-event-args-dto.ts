import type { Address } from "../base/address";
import type { HexString } from "../base/hex-string";
import type { NumericString } from "../base/numeric-string";

export interface ExecutionSelectorRuleUpdatedEventArgsDto {
  readonly orgId: NumericString;
  readonly targetAddress: Address;
  /** Lowercase 0x-prefixed bytes4 selector. */
  readonly selector: HexString;
  readonly enabled: boolean;
  readonly actorAddress: Address;
}
