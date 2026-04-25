import type { Address } from "../base/address";
import type { NumericString } from "../base/numeric-string";

export interface OrganizationCreatedEventArgsDto {
  readonly orgId: NumericString;
  readonly slug: string;
  readonly adminAddress: Address;
  readonly metadataUri: string;
}
