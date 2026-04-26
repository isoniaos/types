import { RoleType } from "../enums/role-type";

export const ROLE_TYPE_CHAIN_MAP = {
  codes: {
    Unknown: 0,
    OrgAdmin: 1,
    BodyAdmin: 2,
    Proposer: 3,
    Approver: 4,
    Vetoer: 5,
    Executor: 6,
    EmergencyOperator: 7
  },
  valuesByCode: {
    1: RoleType.OrgAdmin,
    2: RoleType.BodyAdmin,
    3: RoleType.Proposer,
    4: RoleType.Approver,
    5: RoleType.Vetoer,
    6: RoleType.Executor,
    7: RoleType.EmergencyOperator
  }
} as const;
