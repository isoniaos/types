import type { JsonObject } from "../base/json-object";
import type { NumericString } from "../base/numeric-string";
import { ExternalAuthorityClaim } from "../enums/external-authority-claim";
import { ExternalImportStatus } from "../enums/external-import-status";
import { ExternalResourceProvider } from "../enums/external-resource-provider";
import { ExternalResourceRelation } from "../enums/external-resource-relation";
import { ExternalSourceLabel } from "../enums/external-source-label";
import { ExternalTrustBoundary } from "../enums/external-trust-boundary";
import type { SourceDisclosureDto } from "./source-disclosure-dto";

export interface ExternalResourceDto {
  readonly id: string;
  readonly orgId: NumericString;
  readonly proposalId?: NumericString;
  readonly decisionRecordId?: string;
  readonly accountabilityRecordId?: string;
  readonly provider: ExternalResourceProvider;
  readonly relation: ExternalResourceRelation;
  readonly url: string;
  readonly canonicalRef?: string;
  readonly title?: string;
  readonly sourceLabel: ExternalSourceLabel;
  readonly trustBoundary: ExternalTrustBoundary;
  readonly authorityClaim: ExternalAuthorityClaim;
  readonly importStatus?: ExternalImportStatus;
  /** ISO-8601 timestamp for when the external source was observed, when available. */
  readonly observedAt?: string;
  /** ISO-8601 timestamp for when the external source was imported, when available. */
  readonly importedAt?: string;
  readonly importedBy?: string;
  readonly verificationMethod?: string;
  readonly sourceDisclosure?: SourceDisclosureDto;
  readonly rawMetadataPreview?: JsonObject;
}
