import type { NumericString } from "../base/numeric-string";

export interface BodyUpdatedEventArgsDto {
  readonly orgId: NumericString;
  readonly bodyId: NumericString;
  readonly active: boolean;
  readonly metadataUri: string;
}
