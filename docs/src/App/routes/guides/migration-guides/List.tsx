import React from "react";
import { Strong, Text, TextLink } from "@origin-digital/ods-core";
import { Page, PageSection } from "../../../Page/Page";
import { baseMigrationGuidesURL, ComponentMigrationGuide } from "./consts";

const COMP_NAME = "List";

export const textLinkMigrationGuide: ComponentMigrationGuide = {
  compName: COMP_NAME,
  route: `${baseMigrationGuidesURL}/${COMP_NAME}`,
  ListItemComp: () => (
    <TextLink href={`${baseMigrationGuidesURL}/${COMP_NAME}`}>
      {COMP_NAME}
    </TextLink>
  ),
  PageComp: () => {
    const sections: PageSection[] = [
      {
        title: "Notice",
        children: (
          <Text>
            The <Strong>List, ListItem</Strong> components in{" "}
            <Strong>Style Guide</Strong> were broken an no body should have been
            using them. As a result, there is no migration guide provided here.
            Start using the new <Strong>List, ListItem</Strong> components fresh
            from ODS.
          </Text>
        ),
      },
    ];

    return <Page title={`${COMP_NAME} Migration Guide`} sections={sections} />;
  },
};

export default textLinkMigrationGuide;
