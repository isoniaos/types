import { ExternalAuthorityClaim } from "../enums/external-authority-claim";
import { ExternalSourceLabel } from "../enums/external-source-label";
import { ExternalTrustBoundary } from "../enums/external-trust-boundary";
import { GovernanceRecordSourceCategory } from "../enums/governance-record-source-category";

export interface SourceDisclosureDto {
  readonly sourceCategory: GovernanceRecordSourceCategory;
  readonly sourceLabel: ExternalSourceLabel;
  readonly trustBoundary: ExternalTrustBoundary;
  readonly authorityClaim: ExternalAuthorityClaim;
  /** ISO-8601 timestamp for when the source was observed, when available. */
  readonly observedAt?: string;
  /** ISO-8601 timestamp for when the source was imported, when available. */
  readonly importedAt?: string;
  readonly note?: string;
}
