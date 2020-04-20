import { ReactNode } from "react";

export interface ComponentDocs<T = {}> {
  componentName: string;
  category:
    | "Logic"
    | "Layout"
    | "Content"
    | "Interaction"
    | "Icon"
    | "Internal"
    | "Experimental"
    | "Unknown";
  examples: ExampleDocs[];
  description?: string;
  propDescriptions?: Partial<Record<keyof T, string>>;
  migrationGuide?: boolean;
  variant?: "list" | "table";
  snippets: DocsSnippet[];
  specialRequiredProps?: SpecialProps[];
  specialOptionalProps?: SpecialProps[];
}

export interface SpecialProps {
  name: string;
  type: { label: string; description?: string };
  defaultValue: string;
}

export interface ExampleDocs {
  label?: string;
  description?: string;
  stretch?: boolean;
  noSection?: boolean;
  // Set playroom to false when you want to hide the open in playroom link
  playroom?: boolean;
  Code?: () => JSX.Element;
  Container?: (props: { children: ReactNode }) => JSX.Element;
  // Use this when you need to output a code string that contains state
  codeString?: string;
}

export interface DocsSnippet {
  label: string;
  Code: () => JSX.Element;
}
