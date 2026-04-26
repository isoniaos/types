import { BodyKind } from "../enums/body-kind";

export const BODY_KIND_CHAIN_MAP = {
  codes: {
    Unknown: 0,
    GeneralCouncil: 1,
    TreasuryCommittee: 2,
    SecurityCouncil: 3,
    CapitalHouse: 4,
    MeritHouse: 5,
    EmergencyCouncil: 6,
    Custom: 7
  },
  valuesByCode: {
    1: BodyKind.GeneralCouncil,
    2: BodyKind.TreasuryCommittee,
    3: BodyKind.SecurityCouncil,
    4: BodyKind.CapitalHouse,
    5: BodyKind.MeritHouse,
    6: BodyKind.EmergencyCouncil,
    7: BodyKind.Custom
  }
} as const;
