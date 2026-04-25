import type { Address } from "../base/address";
import type { ChainId } from "../base/chain-id";
import type { GovernanceEventArgsDto } from "../events/governance-event-args-dto";
import type { HexString } from "../base/hex-string";
import type { JsonObject } from "../base/json-object";
import type { NumericString } from "../base/numeric-string";
import type { TransactionHash } from "../base/transaction-hash";
import { GovernanceEventName } from "../enums/governance-event-name";
import { RawEventStatus } from "../enums/raw-event-status";
import type { RawEventKeyDto } from "./raw-event-key-dto";

export interface RawEventDto extends RawEventKeyDto {
  readonly contractAddress: Address;
  readonly blockHash: HexString;
  readonly eventName: GovernanceEventName;
  readonly args: GovernanceEventArgsDto | JsonObject;
  readonly rawLog: JsonObject;
  readonly status: RawEventStatus;
  readonly confirmations: number;
  readonly observedAt: string;
  readonly confirmedAt?: string;
  readonly processedAt?: string;
  readonly failedAt?: string;
  readonly error?: string;
}
