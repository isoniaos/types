import type { NumericString } from "../base/numeric-string";
import type { OrgExecutorDto } from "./org-executor-dto";

export interface OrganizationManagedExecutionDto {
  readonly orgId: NumericString;
  readonly executor?: OrgExecutorDto;
}
