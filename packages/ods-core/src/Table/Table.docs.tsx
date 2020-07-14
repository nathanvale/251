/* eslint-disable react/display-name */
import { ComponentDocs } from "@origin-digital/ods-types";
import { generateTable } from "./Table.helper";
import { TableProps } from "..";

export const propDescriptions = {
  alignX: "This is a prop which aligns the cell content horizontally.",
  bordered: "If true this will add a border around each cell and the table.",
  className: "Additional class for the table.",
  hover: "If true this will add a hover effect on table rows.",
  maxHeight:
    "The max height for the table, will result in a scrolled table if the contents are taller.",
  striped: "If true this will add a background color on every other row.",
  size: "The T-shirt sized padding of table cells.",
  stickyHeader:
    "If true this will cause the table head to be sticky if scrolled out of view.",
  textVariant: "The text size of table cells.",
};

export const docs: ComponentDocs<TableProps> = {
  category: "Content",
  componentName: "Table",
  description:
    'Table is a low-level content component. Its main concerns are wrapping TableHead and TableBody. Open the examples in Playroom to see the behaviour of this component. Please note that due to restrictions in MUI "stickyHeader" can not be used for tables that overflow horizontally in mobile viewports.',
  propDescriptions,
  migrationGuide: false,
  examples: {
    default: {
      Code: () => generateTable(),
    },
    additional: [
      {
        label: "Dense table",
        description: `In order to set the space in cells pass in "size" with a tshirt size (small or medium).`,
        Code: () => generateTable({ size: "small" }),
      },
      {
        label: "Small font size",
        description: `In order to set the font size in cells pass in "textVariant" with a size (body or body-small).`,
        Code: () => generateTable({ textVariant: "body-small" }),
      },
      {
        label: "Striped rows",
        description: `In order to add zebra rows pass in "striped".`,
        Code: () => generateTable({ striped: true }),
      },
      {
        label: "Bordered",
        description: `In order to add borders around all cells pass in "bordered".`,
        Code: () => generateTable({ bordered: true }),
      },
      {
        label: "Hover effect",
        description: `In order to add a hover effect on rows pass in "hover". Please note this does not work in conjunction with "striped".`,
        Code: () => generateTable({ hover: true }),
      },
      {
        label: "Sticky header",
        description: `In order to add a sticky header which sticks to the top of the page if scrolled out of view pass in "stickyHeader".`,
        Code: () => generateTable({ stickyHeader: true }),
      },
      {
        label: "Maximum height",
        description: `In order to add a vertical scrollbar if the table is too large pass in "maxHeight".`,
        Code: () => generateTable({ maxHeight: 200 }, { showExtraRows: true }),
      },
      {
        label: "Without header",
        description: `In order to remove the header omit the TableHead.`,
        Code: () => generateTable({}, { hideTableHead: true }),
      },
      {
        label: "Horizontal align all cells",
        description: `In order to align all cells pass in "alignX" with a value. Please note that the "align" property on TableCell overrules the "align" property on Table.`,
        Code: () => generateTable({ bordered: true, alignX: "right" }),
      },
    ],
  },
  snippets: [{ label: "Default", Code: () => generateTable() }],
};
