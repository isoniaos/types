import type { Address } from "../base/address";
import type { NumericString } from "../base/numeric-string";

export interface MandateAssignedEventArgsDto {
  readonly orgId: NumericString;
  readonly mandateId: NumericString;
  readonly roleId: NumericString;
  readonly bodyId: NumericString;
  readonly holderAddress: Address;
  readonly startTime: NumericString;
  readonly endTime: NumericString;
  readonly proposalTypeMask: NumericString;
  readonly spendingLimit: NumericString;
}
