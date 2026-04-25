import type { ChainId } from "../base/chain-id";
import type { NumericString } from "../base/numeric-string";
import { DataStatus } from "../enums/data-status";
import { RoleType } from "../enums/role-type";

export interface RoleDto {
  readonly chainId: ChainId;
  readonly orgId: NumericString;
  readonly bodyId: NumericString;
  readonly roleId: NumericString;
  readonly roleType: RoleType;
  readonly name: string;
  readonly metadataUri?: string;
  readonly active: boolean;
  readonly dataStatus?: DataStatus;
}
