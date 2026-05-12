export const ORGANIZATION_FINALIZATION_CONTRACT_FUNCTION_NAMES = {
  FinalizeOrganization: "finalizeOrganization",
  IsOrganizationFinalized: "isOrganizationFinalized"
} as const;

export type OrganizationFinalizationContractFunctionName =
  (typeof ORGANIZATION_FINALIZATION_CONTRACT_FUNCTION_NAMES)[keyof typeof ORGANIZATION_FINALIZATION_CONTRACT_FUNCTION_NAMES];

export const ORGANIZATION_FINALIZATION_CONTRACT_FUNCTION_NAME_VALUES = [
  ORGANIZATION_FINALIZATION_CONTRACT_FUNCTION_NAMES.FinalizeOrganization,
  ORGANIZATION_FINALIZATION_CONTRACT_FUNCTION_NAMES.IsOrganizationFinalized
] as const satisfies readonly OrganizationFinalizationContractFunctionName[];

export const ORGANIZATION_FINALIZATION_CONTRACT_ERROR_NAMES = {
  OrganizationAlreadyFinalized: "OrganizationAlreadyFinalized"
} as const;

export type OrganizationFinalizationContractErrorName =
  (typeof ORGANIZATION_FINALIZATION_CONTRACT_ERROR_NAMES)[keyof typeof ORGANIZATION_FINALIZATION_CONTRACT_ERROR_NAMES];

export const ORGANIZATION_FINALIZATION_CONTRACT_ERROR_NAME_VALUES = [
  ORGANIZATION_FINALIZATION_CONTRACT_ERROR_NAMES.OrganizationAlreadyFinalized
] as const satisfies readonly OrganizationFinalizationContractErrorName[];
