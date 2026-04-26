import { OrganizationStatus } from "../enums/organization-status";

export const ORGANIZATION_STATUS_CHAIN_MAP = {
  codes: {
    None: 0,
    Active: 1,
    Paused: 2,
    Archived: 3
  },
  valuesByCode: {
    1: OrganizationStatus.Active,
    2: OrganizationStatus.Paused,
    3: OrganizationStatus.Archived
  }
} as const;
