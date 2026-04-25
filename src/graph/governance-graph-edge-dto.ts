import type { JsonObject } from "../base/json-object";
import { GraphEdgeType } from "../enums/graph-edge-type";

export interface GovernanceGraphEdgeDto {
  readonly id: string;
  readonly sourceId: string;
  readonly targetId: string;
  readonly type: GraphEdgeType;
  readonly label?: string;
  readonly metadata?: JsonObject;
}
