import type { Address } from "../base/address";
import type { ChainId } from "../base/chain-id";
import type { NumericString } from "../base/numeric-string";
import type { TransactionHash } from "../base/transaction-hash";
import type { GovernanceEventName } from "../enums/governance-event-name";

export type DiagnosticsContractName = "govCore" | "govProposals";

export type DiagnosticsIndicatorSeverity = "info" | "warning" | "error";

export type RuntimeProcessName = "api" | "indexer" | "projections";

export type RuntimeProcessStatus = "running" | "stale" | "unknown";

export type DiagnosticsIndicatorCode =
  | "contract_address_missing"
  | "latest_chain_block_unavailable"
  | "contract_cursor_missing"
  | "indexer_behind_safe_block"
  | "projection_backlog"
  | "projection_failures";

export interface DiagnosticsContractDto {
  readonly name: DiagnosticsContractName;
  readonly configured: boolean;
  readonly address?: Address;
}

export interface DiagnosticsContractCursorDto {
  readonly contractName: DiagnosticsContractName;
  readonly address: Address;
  readonly lastScannedBlock?: NumericString;
  readonly lastConfirmedBlock?: NumericString;
  readonly updatedAt?: string;
  readonly lagFromSafeBlock?: NumericString;
}

export interface DiagnosticsRawEventCountsDto {
  readonly observed: number;
  readonly confirmed: number;
  readonly processed: number;
  readonly failed: number;
  readonly orphaned: number;
}

export interface DiagnosticsProjectionErrorDto {
  readonly rawEventId: NumericString;
  readonly chainId: ChainId;
  readonly contractAddress: Address;
  readonly blockNumber: NumericString;
  readonly txHash: TransactionHash;
  readonly logIndex: number;
  readonly eventName: GovernanceEventName | string;
  readonly error: string;
  readonly failedAt?: string;
  readonly processingAttempts: number;
}

export interface DiagnosticsStaleDataIndicatorDto {
  readonly code: DiagnosticsIndicatorCode;
  readonly severity: DiagnosticsIndicatorSeverity;
  readonly message: string;
  readonly contractName?: DiagnosticsContractName;
  readonly contractAddress?: Address;
  readonly lastScannedBlock?: NumericString;
  readonly latestSafeBlock?: NumericString;
  readonly lagBlocks?: NumericString;
}

export interface RuntimeProcessHeartbeatDto {
  readonly processName: RuntimeProcessName;
  readonly status: RuntimeProcessStatus;
  readonly lastSeenAt?: string;
  readonly ageMs?: number;
  readonly metadata: Record<string, unknown>;
}

export interface ProjectionCursorDto {
  readonly blockNumber: NumericString;
  readonly txHash: TransactionHash;
  readonly logIndex: number;
  readonly processedAt: string;
}

export interface DiagnosticsDto {
  readonly apiVersion: string;
  readonly chainId: ChainId;
  readonly confirmations: number;
  readonly contracts: DiagnosticsContractDto[];
  readonly latestChainBlock?: NumericString;
  readonly latestSafeBlock?: NumericString;
  readonly lastScannedBlocks: DiagnosticsContractCursorDto[];
  readonly rawEventCounts: DiagnosticsRawEventCountsDto;
  readonly projectionBacklog: number;
  readonly failedProjectionCount: number;
  readonly latestProjectionError?: DiagnosticsProjectionErrorDto;
  readonly staleDataIndicators: DiagnosticsStaleDataIndicatorDto[];
  readonly generatedAt: string;
}

export interface IndexerDiagnosticsDto {
  readonly apiVersion: string;
  readonly chainId: ChainId;
  readonly generatedAt: string;
  readonly runtime: {
    readonly staleAfterMs: number;
    readonly processes: RuntimeProcessHeartbeatDto[];
  };
  readonly indexer: {
    readonly rpcUrl: string;
    readonly contracts: DiagnosticsContractDto[];
    readonly fromBlock: NumericString;
    readonly pollingIntervalMs: number;
    readonly safeBlockLag: number;
    readonly latestChainBlock?: NumericString;
    readonly latestSafeBlock?: NumericString;
    readonly lastScannedBlocks: DiagnosticsContractCursorDto[];
    readonly rawEventCounts: DiagnosticsRawEventCountsDto;
    readonly staleDataIndicators: DiagnosticsStaleDataIndicatorDto[];
  };
  readonly projections: {
    readonly store: string;
    readonly pollingIntervalMs: number;
    readonly lastProjectedCursor: ProjectionCursorDto | null;
    readonly projectionBacklog: number;
    readonly failedProjectionCount: number;
    readonly latestProjectionError?: DiagnosticsProjectionErrorDto;
  };
}
