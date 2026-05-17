import { ExternalAuthorityClaim } from "../enums/external-authority-claim";
import { ExternalResourceProvider } from "../enums/external-resource-provider";
import { ExternalResourceRelation } from "../enums/external-resource-relation";
import { ExternalSourceLabel } from "../enums/external-source-label";
import { ExternalTrustBoundary } from "../enums/external-trust-boundary";

export interface ExternalResourceRefDto {
  readonly id: string;
  readonly url: string;
  readonly sourceLabel: ExternalSourceLabel;
  readonly provider?: ExternalResourceProvider;
  readonly relation?: ExternalResourceRelation;
  readonly trustBoundary?: ExternalTrustBoundary;
  readonly authorityClaim?: ExternalAuthorityClaim;
}
