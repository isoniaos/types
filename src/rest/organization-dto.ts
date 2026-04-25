import type { Address } from "../base/address";
import type { ChainId } from "../base/chain-id";
import type { NumericString } from "../base/numeric-string";
import type { TransactionHash } from "../base/transaction-hash";
import { DataStatus } from "../enums/data-status";
import { OrganizationStatus } from "../enums/organization-status";

export interface OrganizationDto {
  readonly chainId: ChainId;
  readonly orgId: NumericString;
  readonly slug: string;
  readonly name: string;
  readonly metadataUri?: string;
  readonly adminAddress: Address;
  readonly status: OrganizationStatus;
  readonly createdBlock: NumericString;
  readonly createdTxHash: TransactionHash;
  readonly dataStatus?: DataStatus;
}
