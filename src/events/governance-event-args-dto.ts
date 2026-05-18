import type { BodyCreatedEventArgsDto } from "./body-created-event-args-dto";
import type { BodyUpdatedEventArgsDto } from "./body-updated-event-args-dto";
import type { ExecutionSelectorRuleUpdatedEventArgsDto } from "./execution-selector-rule-updated-event-args-dto";
import type { ExecutionTargetRuleUpdatedEventArgsDto } from "./execution-target-rule-updated-event-args-dto";
import type { MandateAssignedEventArgsDto } from "./mandate-assigned-event-args-dto";
import type { MandateRevokedEventArgsDto } from "./mandate-revoked-event-args-dto";
import type { OrganizationCreatedEventArgsDto } from "./organization-created-event-args-dto";
import type { OrganizationFinalizedEventArgsDto } from "./organization-finalized-event-args-dto";
import type { OrganizationStatusChangedEventArgsDto } from "./organization-status-changed-event-args-dto";
import type { OrganizationUpdatedEventArgsDto } from "./organization-updated-event-args-dto";
import type { PolicyRuleSetEventArgsDto } from "./policy-rule-set-event-args-dto";
import type { ProposalApprovedEventArgsDto } from "./proposal-approved-event-args-dto";
import type { ProposalCancelledEventArgsDto } from "./proposal-cancelled-event-args-dto";
import type { ProposalCreatedEventArgsDto } from "./proposal-created-event-args-dto";
import type { ProposalExecutedEventArgsDto } from "./proposal-executed-event-args-dto";
import type { ProposalQueuedEventArgsDto } from "./proposal-queued-event-args-dto";
import type { ProposalStatusChangedEventArgsDto } from "./proposal-status-changed-event-args-dto";
import type { ProposalVetoedEventArgsDto } from "./proposal-vetoed-event-args-dto";
import type { RoleCreatedEventArgsDto } from "./role-created-event-args-dto";
import type { RoleUpdatedEventArgsDto } from "./role-updated-event-args-dto";

export type GovernanceEventArgsDto =
  | BodyCreatedEventArgsDto
  | BodyUpdatedEventArgsDto
  | ExecutionSelectorRuleUpdatedEventArgsDto
  | ExecutionTargetRuleUpdatedEventArgsDto
  | MandateAssignedEventArgsDto
  | MandateRevokedEventArgsDto
  | OrganizationCreatedEventArgsDto
  | OrganizationFinalizedEventArgsDto
  | OrganizationStatusChangedEventArgsDto
  | OrganizationUpdatedEventArgsDto
  | PolicyRuleSetEventArgsDto
  | ProposalApprovedEventArgsDto
  | ProposalCancelledEventArgsDto
  | ProposalCreatedEventArgsDto
  | ProposalExecutedEventArgsDto
  | ProposalQueuedEventArgsDto
  | ProposalStatusChangedEventArgsDto
  | ProposalVetoedEventArgsDto
  | RoleCreatedEventArgsDto
  | RoleUpdatedEventArgsDto;
