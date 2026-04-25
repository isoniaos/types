import type { NumericString } from "../base/numeric-string";
import { RouteBlockedReasonCode } from "../enums/route-blocked-reason-code";

export interface RouteBlockedReasonDto {
  readonly code: RouteBlockedReasonCode;
  readonly message: string;
  readonly relatedBodyId?: NumericString;
}
