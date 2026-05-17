import type { NumericString } from "../base/numeric-string";
import { AccountabilityExecutionStatus } from "../enums/accountability-execution-status";
import { DecisionRecordResult } from "../enums/decision-record-result";
import type { ExternalResourceRefDto } from "./external-resource-ref-dto";
import type { SourceDisclosureDto } from "./source-disclosure-dto";

export interface DecisionApprovalSummaryDto {
  readonly requiredApprovals?: readonly string[];
  readonly collectedApprovals?: readonly string[];
  readonly vetoState?: "none" | "vetoed" | "unknown";
  readonly policyVersion?: NumericString;
}

export interface DecisionRecordOutcomeDto {
  readonly status: AccountabilityExecutionStatus | DecisionRecordResult | string;
  readonly note?: string;
  readonly reason?: string;
  /** ISO-8601 timestamp for when this outcome was recorded. */
  readonly recordedAt: string;
  readonly sourceDisclosure?: SourceDisclosureDto;
}

export interface DecisionRecordTimestampsDto {
  /** ISO-8601 timestamp for proposal creation when available. */
  readonly proposedAt?: string;
  /** ISO-8601 timestamp for the decision point when available. */
  readonly decidedAt?: string;
  /** ISO-8601 timestamp for queueing when available. */
  readonly queuedAt?: string;
  /** ISO-8601 timestamp for execution when available. */
  readonly executedAt?: string;
  /** ISO-8601 timestamp for archive materialization when available. */
  readonly archivedAt?: string;
}

export interface DecisionRecordDto {
  readonly id: string;
  readonly orgId: NumericString;
  readonly proposalId: NumericString;
  readonly decisionResult: DecisionRecordResult;
  readonly approvalSummary?: DecisionApprovalSummaryDto;
  readonly requiresExecution: boolean;
  readonly accountabilityRecordId?: string;
  readonly responsiblePartyLabel?: string;
  /** ISO-8601 due date or date-time for the accountability expectation. */
  readonly dueDate?: string;
  readonly evidence: readonly ExternalResourceRefDto[];
  readonly finalOutcome?: DecisionRecordOutcomeDto;
  readonly timestamps: DecisionRecordTimestampsDto;
  readonly sourceDisclosure?: SourceDisclosureDto;
}
