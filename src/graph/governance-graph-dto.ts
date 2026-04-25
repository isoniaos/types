import type { ChainId } from "../base/chain-id";
import type { NumericString } from "../base/numeric-string";
import type { GovernanceGraphEdgeDto } from "./governance-graph-edge-dto";
import type { GovernanceGraphNodeDto } from "./governance-graph-node-dto";

export interface GovernanceGraphDto {
  readonly chainId: ChainId;
  readonly orgId: NumericString;
  readonly nodes: readonly GovernanceGraphNodeDto[];
  readonly edges: readonly GovernanceGraphEdgeDto[];
}
