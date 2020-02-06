import {ReactNode} from 'react';

export interface ComponentDocs<T = {}> {
  componentName: string;
  category:
    | 'Logic'
    | 'Layout'
    | 'Content'
    | 'Interaction'
    | 'Icon'
    | 'Experimental';
  examples: ExampleDocs[];
  description?: string;
  propDescriptions?: Partial<Record<keyof T, string>>;
  migrationGuide?: boolean;
  variant?: 'list' | 'table';
}

export interface ExampleDocs {
  label?: string;
  description?: string;
  stretch?: boolean;
  noSection?: boolean;
  Code: () => JSX.Element;
  Container?: (props: {children: ReactNode}) => JSX.Element;
}
