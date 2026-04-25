import type { NumericString } from "../base/numeric-string";
import { RoleType } from "../enums/role-type";

export interface RoleCreatedEventArgsDto {
  readonly orgId: NumericString;
  readonly roleId: NumericString;
  readonly bodyId: NumericString;
  readonly roleType: RoleType;
  readonly metadataUri: string;
}
