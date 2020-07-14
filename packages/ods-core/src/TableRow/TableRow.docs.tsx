/* eslint-disable react/display-name */
import { ComponentDocs } from "@origin-digital/ods-types";
import { generateTable } from "../Table/Table.helper";
import { TableRowProps } from "..";

export const docs: ComponentDocs<TableRowProps> = {
  category: "Content",
  componentName: "TableRow",
  description:
    "TableRow is a low-level content component. Its main concerns are wrapping a single or multiple TableCells. Open the examples in Playroom to see the behaviour of this component.",
  propDescriptions: {
    className: "Additional class for the table row.",
  },
  migrationGuide: false,
  examples: {
    default: {
      Code: () => generateTable(),
    },
    additional: [],
  },
  snippets: [],
};
