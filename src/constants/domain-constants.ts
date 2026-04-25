import { DataStatus } from "../enums/data-status";
import { GovernanceEventName } from "../enums/governance-event-name";
import { RawEventStatus } from "../enums/raw-event-status";

export const DOMAIN_CONSTANTS = {
  apiV1Prefix: "/v1",
  eventIdentityFields: ["chainId", "blockNumber", "txHash", "logIndex"],
  visibleDataStatuses: [DataStatus.Observed, DataStatus.Confirmed],
  rawEventStatuses: [
    RawEventStatus.Observed,
    RawEventStatus.Confirmed,
    RawEventStatus.Processed,
    RawEventStatus.Failed,
    RawEventStatus.Orphaned
  ],
  governanceEventNames: [
    GovernanceEventName.OrganizationCreated,
    GovernanceEventName.OrganizationUpdated,
    GovernanceEventName.OrganizationStatusChanged,
    GovernanceEventName.BodyCreated,
    GovernanceEventName.BodyUpdated,
    GovernanceEventName.RoleCreated,
    GovernanceEventName.RoleUpdated,
    GovernanceEventName.MandateAssigned,
    GovernanceEventName.MandateRevoked,
    GovernanceEventName.PolicyRuleSet,
    GovernanceEventName.ProposalCreated,
    GovernanceEventName.ProposalApproved,
    GovernanceEventName.ProposalVetoed,
    GovernanceEventName.ProposalQueued,
    GovernanceEventName.ProposalExecuted,
    GovernanceEventName.ProposalCancelled
  ],
  defaultConfirmationDepths: {
    local: 0,
    testnet: 6
  }
} as const;
