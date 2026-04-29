import { ProposalType } from "../enums/proposal-type";

export type TemplateInputKind =
  | "text"
  | "textarea"
  | "address"
  | "address_list"
  | "number"
  | "boolean"
  | "proposal_type"
  | "proposal_type_list"
  | "timelock_seconds";

export type TemplateInputValue =
  | string
  | number
  | boolean
  | readonly string[]
  | readonly ProposalType[];

export interface TemplateInputOptionDescriptor {
  readonly value: string;
  readonly label: string;
  readonly description?: string;
}

export interface TemplateInputDescriptor {
  readonly inputId: string;
  readonly label: string;
  readonly description?: string;
  readonly kind: TemplateInputKind;
  readonly required: boolean;
  readonly defaultValue?: TemplateInputValue;
  readonly placeholder?: string;
  readonly options?: readonly TemplateInputOptionDescriptor[];
}
