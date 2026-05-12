export const BOOTSTRAP_ADMIN_OPERATIONS = {
  CreateBody: "create_body",
  UpdateBody: "update_body",
  CreateRole: "create_role",
  UpdateRole: "update_role",
  AssignMandate: "assign_mandate",
  RevokeMandate: "revoke_mandate",
  SetPolicyRule: "set_policy_rule",
  SetOrganizationStatus: "set_organization_status",
  AdminCancelProposal: "admin_cancel_proposal",
  BatchCreateBodies: "batch_create_bodies",
  BatchCreateRoles: "batch_create_roles",
  BatchAssignMandates: "batch_assign_mandates",
  BatchSetPolicyRules: "batch_set_policy_rules"
} as const;

export type BootstrapAdminOperation =
  (typeof BOOTSTRAP_ADMIN_OPERATIONS)[keyof typeof BOOTSTRAP_ADMIN_OPERATIONS];

export const POST_FINALIZATION_BLOCKED_BOOTSTRAP_ADMIN_OPERATIONS = [
  BOOTSTRAP_ADMIN_OPERATIONS.CreateBody,
  BOOTSTRAP_ADMIN_OPERATIONS.UpdateBody,
  BOOTSTRAP_ADMIN_OPERATIONS.CreateRole,
  BOOTSTRAP_ADMIN_OPERATIONS.UpdateRole,
  BOOTSTRAP_ADMIN_OPERATIONS.AssignMandate,
  BOOTSTRAP_ADMIN_OPERATIONS.RevokeMandate,
  BOOTSTRAP_ADMIN_OPERATIONS.SetPolicyRule,
  BOOTSTRAP_ADMIN_OPERATIONS.SetOrganizationStatus,
  BOOTSTRAP_ADMIN_OPERATIONS.AdminCancelProposal,
  BOOTSTRAP_ADMIN_OPERATIONS.BatchCreateBodies,
  BOOTSTRAP_ADMIN_OPERATIONS.BatchCreateRoles,
  BOOTSTRAP_ADMIN_OPERATIONS.BatchAssignMandates,
  BOOTSTRAP_ADMIN_OPERATIONS.BatchSetPolicyRules
] as const satisfies readonly BootstrapAdminOperation[];
