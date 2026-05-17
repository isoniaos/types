import type { ChainId } from "../base/chain-id";
import type { NumericString } from "../base/numeric-string";
import { AccountabilityExecutionStatus } from "../enums/accountability-execution-status";
import { ArchiveProposalDisplayState } from "../enums/archive-proposal-display-state";
import { DecisionRecordResult } from "../enums/decision-record-result";
import { ProposalStatus } from "../enums/proposal-status";
import { ProposalType } from "../enums/proposal-type";
import type { SourceDisclosureDto } from "./source-disclosure-dto";

export interface ArchiveProposalSummaryDto {
  readonly chainId: ChainId;
  readonly orgId: NumericString;
  readonly proposalId: NumericString;
  readonly title: string;
  readonly proposalType?: ProposalType;
  readonly contractStatus?: ProposalStatus;
  readonly displayState: ArchiveProposalDisplayState;
  readonly decisionResult?: DecisionRecordResult;
  readonly executionStatus?: AccountabilityExecutionStatus;
  readonly responsiblePartyLabel?: string;
  /** ISO-8601 due date or date-time for the accountability expectation. */
  readonly dueDate?: string;
  readonly evidenceCount: number;
  readonly externalSourceCount: number;
  /** ISO-8601 timestamp for the most recent archive-relevant update. */
  readonly lastUpdatedAt?: string;
  readonly sourceDisclosure?: SourceDisclosureDto;
}
