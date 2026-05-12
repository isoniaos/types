import type { Address } from "../base/address";
import type { NumericString } from "../base/numeric-string";

export interface OrganizationFinalizedEventArgsDto {
  readonly orgId: NumericString;
  readonly admin: Address;
}
