import type { ChainId } from "../base/chain-id";
import type { NumericString } from "../base/numeric-string";
import { ProposalStatus } from "../enums/proposal-status";
import { ProposalType } from "../enums/proposal-type";
import type { ProposalRouteExecutionDto } from "./proposal-route-execution-dto";
import type { ProposalRouteTimelockDto } from "./proposal-route-timelock-dto";
import type { RouteBodyRequirementDto } from "./route-body-requirement-dto";
import type { RouteBodyVetoDto } from "./route-body-veto-dto";

export interface ProposalRouteExplanationDto {
  readonly chainId: ChainId;
  readonly orgId: NumericString;
  readonly proposalId: NumericString;
  readonly proposalType: ProposalType;
  readonly status: ProposalStatus;
  readonly requiredApprovalBodies: readonly RouteBodyRequirementDto[];
  readonly vetoBodies: readonly RouteBodyVetoDto[];
  readonly timelock: ProposalRouteTimelockDto;
  readonly execution: ProposalRouteExecutionDto;
}
