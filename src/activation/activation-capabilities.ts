import type { AdminBatchActivationFunctionName } from "./batch-activation";
import type { ActivationCapabilityStatus } from "../enums/activation-capability-status";
import type { ActivationExecutionMode } from "../enums/activation-execution-mode";

export interface ActivationCapabilityFlags {
  readonly serial: boolean;
  readonly contractBatch: boolean;
  readonly walletBatchEip5792: boolean;
}

export interface ContractBatchActivationSupport {
  readonly status: ActivationCapabilityStatus;
  readonly supportedFunctions: readonly AdminBatchActivationFunctionName[];
}

export interface WalletBatchEip5792ActivationSupport {
  readonly status: ActivationCapabilityStatus;
  readonly standard: "eip5792";
}

export interface ActivationCapabilities {
  readonly availableModes: readonly ActivationExecutionMode[];
  readonly flags: ActivationCapabilityFlags;
  readonly contractBatch: ContractBatchActivationSupport;
  readonly walletBatchEip5792?: WalletBatchEip5792ActivationSupport;
}
