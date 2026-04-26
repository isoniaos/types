import { ProposalStatus } from "../enums/proposal-status";

export const PROPOSAL_STATUS_CHAIN_MAP = {
  codes: {
    None: 0,
    Created: 1,
    UnderReview: 2,
    Approved: 3,
    Queued: 4,
    Vetoed: 5,
    Executed: 6,
    Cancelled: 7,
    Expired: 8
  },
  valuesByCode: {
    1: ProposalStatus.Created,
    2: ProposalStatus.UnderReview,
    3: ProposalStatus.Approved,
    4: ProposalStatus.Queued,
    5: ProposalStatus.Vetoed,
    6: ProposalStatus.Executed,
    7: ProposalStatus.Cancelled,
    8: ProposalStatus.Expired
  }
} as const;
