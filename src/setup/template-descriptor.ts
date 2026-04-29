import type { ChainId } from "../base/chain-id";
import type { JsonObject } from "../base/json-object";
import type { SetupAction } from "./setup-action";
import type { SetupValidationWarning } from "./setup-validation-warning";
import type { TemplateInputDescriptor } from "./template-input-descriptor";

export interface TemplateDefaults {
  readonly inputValues: JsonObject;
  readonly actions?: readonly SetupAction[];
}

export interface TemplateDescriptor {
  readonly templateId: string;
  readonly version: string;
  readonly name: string;
  readonly summary: string;
  readonly description?: string;
  readonly supportedChains?: readonly ChainId[];
  readonly inputs: readonly TemplateInputDescriptor[];
  readonly defaults: TemplateDefaults;
  readonly actionFactoryId: string;
  readonly warnings: readonly SetupValidationWarning[];
}
