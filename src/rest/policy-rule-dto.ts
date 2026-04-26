import type { ChainId } from "../base/chain-id";
import type { NumericString } from "../base/numeric-string";
import { DataStatus } from "../enums/data-status";
import { ProposalType } from "../enums/proposal-type";

export interface PolicyRuleDto {
  readonly chainId: ChainId;
  readonly orgId: NumericString;
  readonly proposalType: ProposalType;
  readonly version: NumericString;
  readonly requiredApprovalBodies: readonly NumericString[];
  readonly vetoBodies: readonly NumericString[];
  readonly executorBody?: NumericString;
  readonly timelockSeconds: NumericString;
  readonly enabled: boolean;
  readonly dataStatus?: DataStatus;
}
