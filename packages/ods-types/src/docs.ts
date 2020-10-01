import type { ReactNode } from "react";

export interface ComponentDocs<T = {}> {
  componentName: string;
  category:
    | "Logic"
    | "Layout"
    | "Content"
    | "Interaction"
    | "Icon"
    | "Atomic"
    | "Experimental"
    | "Unknown";
  examples: {
    default: ExampleDocsDefault;
    additional?: ExampleDocs[];
  };
  description?: ReactNode;
  propDescriptions?: Partial<Record<keyof T, string>>;
  migrationGuide?: boolean;
  snippets: DocsSnippet[];
  specialRequiredProps?: SpecialProps[];
  specialOptionalProps?: SpecialProps[];
}

export type E2ETests = E2ETest[];

export interface E2ETest {
  label: string;
  Code: () => JSX.Element;
  responsive?: boolean;
}

export interface SpecialProps {
  name: string;
  type: { label: string; description?: string };
  defaultValue: string;
}

export interface ExampleDocsDefault {
  stretch?: boolean;
  noCard?: boolean;
  // Set playroom to false when you want to hide the open in playroom link
  playroom?: boolean;
  Code?: () => JSX.Element;
  // Use this when you need to output a code string that contains state
  codeString?: string;
}

export interface ExampleDocs extends ExampleDocsDefault {
  label: string;
  description?: ReactNode;
}

export interface DocsSnippet {
  label: string;
  Code: () => JSX.Element;
}

export interface NormalisedInterface {
  type: "interface";
  props: {
    [propName: string]: {
      propName: string;
      required: boolean;
      type: NormalisedPropType;
    };
  };
}

export type NormalisedPropType =
  | string
  | { type: "union"; types: Array<NormalisedPropType> }
  | { type: "alias"; alias: string; params: Array<NormalisedPropType> }
  | NormalisedInterface;
