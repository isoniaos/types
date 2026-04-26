import { DecisionType } from "../enums/decision-type";

export const DECISION_TYPE_CHAIN_MAP = {
  codes: {
    Unknown: 0,
    Approve: 1,
    Veto: 2
  },
  valuesByCode: {
    1: DecisionType.Approve,
    2: DecisionType.Veto
  }
} as const;
