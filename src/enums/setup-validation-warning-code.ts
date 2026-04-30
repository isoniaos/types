export enum SetupValidationWarningCode {
  InvalidAddress = "invalid_address",
  ZeroAddressAuthority = "zero_address_authority",
  MissingApproverMandate = "missing_approver_mandate",
  MissingVetoMandate = "missing_veto_mandate",
  MissingExecutorMandate = "missing_executor_mandate",
  PolicyRouteWithoutEligibleHolder = "policy_route_without_eligible_holder",
  InvalidTimelock = "invalid_timelock",
  EmptyRequiredApprovals = "empty_required_approvals",
  ProposalTypeScopeMismatch = "proposal_type_scope_mismatch"
}
