import type { ChainId } from "../base/chain-id";
import type { NumericString } from "../base/numeric-string";
import { BodyKind } from "../enums/body-kind";
import { DataStatus } from "../enums/data-status";

export interface BodyDto {
  readonly chainId: ChainId;
  readonly orgId: NumericString;
  readonly bodyId: NumericString;
  readonly kind: BodyKind;
  readonly name: string;
  readonly metadataUri?: string;
  readonly active: boolean;
  readonly createdBlock: NumericString;
  readonly dataStatus?: DataStatus;
}
