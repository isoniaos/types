export enum RouteBlockedReasonCode {
  MissingApproval = "missing_approval",
  Vetoed = "vetoed",
  NotQueued = "not_queued",
  TimelockNotSatisfied = "timelock_not_satisfied",
  AlreadyExecuted = "already_executed",
  Cancelled = "cancelled",
  Expired = "expired",
  PolicyDisabled = "policy_disabled",
  PolicySnapshotMissing = "policy_snapshot_missing",
  ExecutionTargetNotAllowed = "execution_target_not_allowed",
  ExecutionSelectorNotAllowed = "execution_selector_not_allowed",
  ExecutionValueLimitExceeded = "execution_value_limit_exceeded",
  ExecutionCalldataUnavailable = "execution_calldata_unavailable",
  Unknown = "unknown"
}
