import { ExternalSourceLabel } from "../enums/external-source-label";
import { ExternalTrustBoundary } from "../enums/external-trust-boundary";

export const EXTERNAL_SOURCE_LABEL_TEXT = {
  [ExternalSourceLabel.ContractState]: "Contract state",
  [ExternalSourceLabel.OnchainTransaction]: "Onchain transaction",
  [ExternalSourceLabel.ExternalPlatform]: "External platform",
  [ExternalSourceLabel.ImportedPreview]: "Imported preview",
  [ExternalSourceLabel.ManualEvidence]: "Manual evidence",
  [ExternalSourceLabel.DiscussionContext]: "Discussion context",
  [ExternalSourceLabel.ImplementationArtifact]: "Implementation artifact"
} as const;

export const EXTERNAL_TRUST_BOUNDARY_TEXT = {
  [ExternalTrustBoundary.OnchainObservation]: "Onchain observation",
  [ExternalTrustBoundary.ExternalPlatformRecord]: "External platform record",
  [ExternalTrustBoundary.ManualContext]: "Manual context",
  [ExternalTrustBoundary.ImportPreview]: "Import preview",
  [ExternalTrustBoundary.UnverifiedLink]: "Unverified link"
} as const;
