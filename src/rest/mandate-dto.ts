import type { Address } from "../base/address";
import type { ChainId } from "../base/chain-id";
import type { NumericString } from "../base/numeric-string";
import { DataStatus } from "../enums/data-status";

export interface MandateDto {
  readonly chainId: ChainId;
  readonly orgId: NumericString;
  readonly mandateId: NumericString;
  readonly bodyId: NumericString;
  readonly roleId: NumericString;
  readonly holderAddress: Address;
  readonly startTime: NumericString;
  readonly endTime: NumericString;
  readonly proposalTypeMask: NumericString;
  readonly spendingLimit: NumericString;
  readonly active: boolean;
  readonly revoked: boolean;
  readonly dataStatus?: DataStatus;
}
