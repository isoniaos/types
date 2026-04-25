import type { NumericString } from "../base/numeric-string";
import { OrganizationStatus } from "../enums/organization-status";

export interface OrganizationStatusChangedEventArgsDto {
  readonly orgId: NumericString;
  readonly status: OrganizationStatus;
}
