import type { Address } from "../base/address";
import type { Bytes4Selector } from "../base/bytes4-selector";
import type { NumericString } from "../base/numeric-string";

export interface ExecutionSelectorRuleUpdatedEventArgsDto {
  readonly orgId: NumericString;
  readonly targetAddress: Address;
  /** Lowercase 0x-prefixed bytes4 selector. */
  readonly selector: Bytes4Selector;
  readonly enabled: boolean;
  readonly actorAddress: Address;
}
