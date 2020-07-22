import { ComponentDocs } from "@origin-digital/ods-types";
import { docs as listItemDocs } from "../ListItem/ListItem.docs";
import { docs as textDocs } from "../Text/Text.docs";
import { ListProps } from "./List";

export const docs: ComponentDocs<ListProps> = {
  category: "Content",
  componentName: "List",
  examples: listItemDocs.examples,
  description:
    "ODS offers authors several mechanisms for specifying lists of information. All lists must contain one or more list elements. Lists may contain unordered information, ordered information or icons.",
  propDescriptions: {
    space: "The responsive prop T-shirt sized space between all items.",
    tone: textDocs?.propDescriptions?.tone,
    variant: textDocs?.propDescriptions?.variant,
    weight: textDocs?.propDescriptions?.weight,
    type: "Defines the type of the list item marker (bullet).",
  },
  snippets: [],
};
