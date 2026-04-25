import type { NumericString } from "../base/numeric-string";
import { BodyKind } from "../enums/body-kind";

export interface BodyCreatedEventArgsDto {
  readonly orgId: NumericString;
  readonly bodyId: NumericString;
  readonly kind: BodyKind;
  readonly metadataUri: string;
}
