import type { NumericString } from "../base/numeric-string";

export interface ProposalRouteTimelockDto {
  readonly required: boolean;
  readonly seconds: NumericString;
  readonly queuedAtChain?: NumericString;
  readonly executableAtChain?: NumericString;
  readonly satisfied: boolean;
}
