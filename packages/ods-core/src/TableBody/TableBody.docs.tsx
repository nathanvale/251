/* eslint-disable react/display-name */
import { ComponentDocs } from "@origin-digital/ods-types";
import { generateTable } from "../Table/Table.helper";
import { TableBodyProps } from "..";

export const docs: ComponentDocs<TableBodyProps> = {
  category: "Content",
  componentName: "TableBody",
  description:
    "TableBody is a low-level content component. Its main concerns are wrapping a single or multiple TableRows. Open the examples in Playroom to see the behaviour of this component.",
  propDescriptions: {},
  migrationGuide: false,
  examples: {
    default: {
      Code: () => generateTable(),
    },
    additional: [],
  },
  snippets: [],
};
