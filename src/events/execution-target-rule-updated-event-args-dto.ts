import type { Address } from "../base/address";
import type { NumericString } from "../base/numeric-string";

export interface ExecutionTargetRuleUpdatedEventArgsDto {
  readonly orgId: NumericString;
  readonly targetAddress: Address;
  readonly enabled: boolean;
  readonly maxValue: NumericString;
  readonly actorAddress: Address;
}
