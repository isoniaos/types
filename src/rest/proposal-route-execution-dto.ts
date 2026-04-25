import type { NumericString } from "../base/numeric-string";
import type { RouteBlockedReasonDto } from "./route-blocked-reason-dto";

export interface ProposalRouteExecutionDto {
  readonly executable: boolean;
  readonly executorBody?: NumericString;
  readonly blockedReasons: readonly RouteBlockedReasonDto[];
}
