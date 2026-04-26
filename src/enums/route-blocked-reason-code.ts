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
  Unknown = "unknown"
}
