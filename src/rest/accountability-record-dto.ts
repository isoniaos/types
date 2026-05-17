import type { Address } from "../base/address";
import type { ChainId } from "../base/chain-id";
import type { NumericString } from "../base/numeric-string";
import type { TransactionHash } from "../base/transaction-hash";
import { AccountabilityExecutionStatus } from "../enums/accountability-execution-status";
import { ObservedTransactionStatus } from "../enums/observed-transaction-status";
import type { ExternalResourceRefDto } from "./external-resource-ref-dto";
import type { SourceDisclosureDto } from "./source-disclosure-dto";

export interface ResponsiblePartyDto {
  readonly label: string;
  readonly walletAddress?: Address;
  readonly externalIdentityUrl?: string;
}

export interface LinkedTransactionDto {
  readonly chainId: ChainId;
  readonly txHash: TransactionHash;
  readonly explorerUrl?: string;
  readonly observedStatus?: ObservedTransactionStatus;
  readonly sourceDisclosure?: SourceDisclosureDto;
}

export interface ManualAccountabilityUpdateDto {
  readonly status: AccountabilityExecutionStatus;
  readonly note?: string;
  readonly reason?: string;
  readonly updatedBy?: string;
  /** ISO-8601 timestamp for when this annotation was recorded. */
  readonly updatedAt: string;
  readonly evidence?: readonly ExternalResourceRefDto[];
  readonly sourceDisclosure?: SourceDisclosureDto;
}

export interface CompletionConfirmationDto {
  readonly confirmedBy?: string;
  /** ISO-8601 timestamp for when this confirmation annotation was recorded. */
  readonly confirmedAt: string;
  readonly note?: string;
  readonly evidence?: readonly ExternalResourceRefDto[];
  readonly sourceDisclosure?: SourceDisclosureDto;
}

export interface AccountabilityRecordDto {
  readonly id: string;
  readonly orgId: NumericString;
  readonly proposalId: NumericString;
  readonly decisionRecordId?: string;
  readonly responsibleParty?: ResponsiblePartyDto;
  /** ISO-8601 due date or date-time for the accountability expectation. */
  readonly dueDate?: string;
  readonly executionStatus: AccountabilityExecutionStatus;
  readonly linkedTransaction?: LinkedTransactionDto;
  readonly externalProofs: readonly ExternalResourceRefDto[];
  readonly manualUpdates: readonly ManualAccountabilityUpdateDto[];
  readonly completionConfirmation?: CompletionConfirmationDto;
  readonly sourceDisclosure?: SourceDisclosureDto;
}
