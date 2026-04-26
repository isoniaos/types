import { ProposalType } from "../enums/proposal-type";

export const PROPOSAL_TYPE_CHAIN_MAP = {
  codes: {
    Unknown: 0,
    Standard: 1,
    Treasury: 2,
    Upgrade: 3,
    Emergency: 4
  },
  valuesByCode: {
    1: ProposalType.Standard,
    2: ProposalType.Treasury,
    3: ProposalType.Upgrade,
    4: ProposalType.Emergency
  }
} as const;
