import type { OrganizationOverviewCountsDto } from "./organization-overview-counts-dto";
import type { OrganizationDto } from "./organization-dto";
import type { ProposalSummaryDto } from "./proposal-summary-dto";

export interface OrganizationOverviewDto {
  readonly organization: OrganizationDto;
  readonly counts: OrganizationOverviewCountsDto;
  readonly latestProposals: readonly ProposalSummaryDto[];
}
