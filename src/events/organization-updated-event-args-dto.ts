import type { NumericString } from "../base/numeric-string";

export interface OrganizationUpdatedEventArgsDto {
  readonly orgId: NumericString;
  readonly metadataUri: string;
}
