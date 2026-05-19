import { DataStatus } from "../enums/data-status";
import { GovernanceEventName } from "../enums/governance-event-name";
import { RawEventStatus } from "../enums/raw-event-status";
import { POST_FINALIZATION_BLOCKED_BOOTSTRAP_ADMIN_OPERATIONS } from "../finalization/bootstrap-admin-operation";
import {
  ORGANIZATION_FINALIZATION_CONTRACT_ERROR_NAME_VALUES,
  ORGANIZATION_FINALIZATION_CONTRACT_FUNCTION_NAME_VALUES
} from "../finalization/contract-finalization";
import {
  ORGANIZATION_FINALIZATION_CAPABILITY_STATUS_VALUES,
  ORGANIZATION_FINALIZATION_STATUS_VALUES,
  ORGANIZATION_LIFECYCLE_STATUS_VALUES
} from "../finalization/organization-finalization";

export const DOMAIN_CONSTANTS = {
  apiV1Prefix: "/v1",
  eventIdentityFields: ["chainId", "txHash", "logIndex"],
  logicalEventIdentityFields: ["chainId", "txHash", "logIndex"],
  physicalEventIdentityFields: ["chainId", "blockHash", "txHash", "logIndex"],
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
    GovernanceEventName.OrganizationFinalized,
    GovernanceEventName.OrgExecutorUpdated,
    GovernanceEventName.BodyCreated,
    GovernanceEventName.BodyUpdated,
    GovernanceEventName.RoleCreated,
    GovernanceEventName.RoleUpdated,
    GovernanceEventName.MandateAssigned,
    GovernanceEventName.MandateRevoked,
    GovernanceEventName.PolicyRuleSet,
    GovernanceEventName.ExecutionTargetRuleUpdated,
    GovernanceEventName.ExecutionSelectorRuleUpdated,
    GovernanceEventName.ProposalCreated,
    GovernanceEventName.ProposalApproved,
    GovernanceEventName.ProposalStatusChanged,
    GovernanceEventName.ProposalVetoed,
    GovernanceEventName.ProposalQueued,
    GovernanceEventName.ProposalExecuted,
    GovernanceEventName.ProposalCancelled
  ],
  organizationFinalizationStatuses: ORGANIZATION_FINALIZATION_STATUS_VALUES,
  organizationLifecycleStatuses: ORGANIZATION_LIFECYCLE_STATUS_VALUES,
  organizationFinalizationCapabilityStatuses: ORGANIZATION_FINALIZATION_CAPABILITY_STATUS_VALUES,
  organizationFinalizationFunctionNames: ORGANIZATION_FINALIZATION_CONTRACT_FUNCTION_NAME_VALUES,
  organizationFinalizationErrorNames: ORGANIZATION_FINALIZATION_CONTRACT_ERROR_NAME_VALUES,
  postFinalizationBlockedBootstrapAdminOperations: POST_FINALIZATION_BLOCKED_BOOTSTRAP_ADMIN_OPERATIONS,
  defaultConfirmationDepths: {
    local: 0,
    testnet: 6
  }
} as const;
