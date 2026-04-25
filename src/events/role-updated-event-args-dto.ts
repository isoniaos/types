import type { NumericString } from "../base/numeric-string";

export interface RoleUpdatedEventArgsDto {
  readonly orgId: NumericString;
  readonly roleId: NumericString;
  readonly active: boolean;
  readonly metadataUri: string;
}
