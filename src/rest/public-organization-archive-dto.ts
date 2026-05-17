import type { OrganizationDto } from "./organization-dto";
import type { ArchiveProposalSummaryDto } from "./archive-proposal-summary-dto";
import type { SourceDisclosureDto } from "./source-disclosure-dto";

export interface PublicOrganizationArchiveCountsDto {
  readonly activeProposals: number;
  readonly approvedAwaitingExecution: number;
  readonly executedDecisions: number;
  readonly failedOrCancelledFollowThrough: number;
  readonly proposalsWithMissingEvidence: number;
  readonly manualOnlyStatusRecords: number;
}

export interface PublicOrganizationArchiveDto {
  readonly organization: OrganizationDto;
  readonly counts: PublicOrganizationArchiveCountsDto;
  readonly proposals: readonly ArchiveProposalSummaryDto[];
  readonly readModelStatus?: SourceDisclosureDto;
}
