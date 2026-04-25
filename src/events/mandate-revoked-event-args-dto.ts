import type { Address } from "../base/address";
import type { NumericString } from "../base/numeric-string";

export interface MandateRevokedEventArgsDto {
  readonly orgId: NumericString;
  readonly mandateId: NumericString;
  readonly holderAddress: Address;
}
