import React from "react";
import { ComponentDocs } from "@origin-digital/ods-types";
import { propDescriptions } from "../Table/Table.docs";
import { DataTable, DataTableProps } from "./DataTable";

export const docs: ComponentDocs<DataTableProps> = {
  category: "Content",
  componentName: "DataTable",
  description:
    "DataTable is a component that allows for a controlled version of Table. Open the examples in Playroom to see the behaviour of this component.",
  propDescriptions: {
    ...propDescriptions,
    headings: "List of headings for the table.",
    data: "List of lists of content for the table.",
  },
  migrationGuide: false,
  examples: {
    default: {
      Code: () => (
        <DataTable
          headings={["1", "2", "3"]}
          data={[
            ["One", "Two", "Three"],
            ["Uno", "Dos", "Tres"],
            ["Een", "Twee", "Drie"],
          ]}
        />
      ),
    },
    additional: [
      {
        label: "Without headings",
        Code: () => (
          <DataTable
            data={[
              ["One", "Two", "Three"],
              ["Uno", "Dos", "Tres"],
              ["Een", "Twee", "Drie"],
            ]}
          />
        ),
      },
    ],
  },
  snippets: [],
};
