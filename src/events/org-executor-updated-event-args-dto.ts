import type { Address } from "../base/address";
import type { NumericString } from "../base/numeric-string";

export interface OrgExecutorUpdatedEventArgsDto {
  readonly orgId: NumericString;
  readonly previousExecutorAddress: Address;
  readonly newExecutorAddress: Address;
  readonly actorAddress: Address;
}
