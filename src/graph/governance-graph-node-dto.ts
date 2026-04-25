import type { JsonObject } from "../base/json-object";
import { GraphNodeType } from "../enums/graph-node-type";

export interface GovernanceGraphNodeDto {
  readonly id: string;
  readonly type: GraphNodeType;
  readonly label: string;
  readonly metadata?: JsonObject;
}
