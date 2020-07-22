import React from "react";
import { ComponentDocs } from "@origin-digital/ods-types";
import {
  IconLightbulbOutline,
  IconGas,
  IconHotWater,
} from "@origin-digital/ods-icons";
import { ListItem, List, TextLink } from "..";

export const docs: ComponentDocs = {
  category: "Content",
  componentName: "ListItem",
  migrationGuide: false,
  examples: {
    default: {
      Code: () => (
        <List>
          <ListItem>This is a ListItem.</ListItem>
          <ListItem>This is a ListItem.</ListItem>
          <ListItem>This is a ListItem.</ListItem>
        </List>
      ),
    },
    additional: [
      {
        label: "Unordered list with disc bullets",
        Code: () => (
          <List type="disc">
            <ListItem>This is a ListItem.</ListItem>
            <ListItem>This is a ListItem.</ListItem>
            <ListItem>This is a ListItem.</ListItem>
          </List>
        ),
      },
      {
        label: "Unordered list with circle bullets",
        Code: () => (
          <List type="circle">
            <ListItem>This is a list ListItem.</ListItem>
            <ListItem>This is a list ListItem.</ListItem>
            <ListItem>This is a list ListItem.</ListItem>
          </List>
        ),
      },
      {
        label: "Unordered list with icons",
        Code: () => (
          <List>
            <ListItem icon={<IconLightbulbOutline />}>
              This is a ListItem.
            </ListItem>
            <ListItem icon={<IconGas />}>This is a ListItem.</ListItem>
            <ListItem icon={<IconHotWater />}>This is a ListItem.</ListItem>
          </List>
        ),
      },
      {
        label: "Ordered list with decimal number bullets",
        Code: () => (
          <List type="decimal">
            <ListItem>This is a list ListItem.</ListItem>
            <ListItem>This is a list ListItem.</ListItem>
            <ListItem>This is a list ListItem.</ListItem>
          </List>
        ),
      },
      {
        label: "Ordered list with stylised decimal number bullets",
        Code: () => (
          <List type="decimal-stylised">
            <ListItem>This is a list ListItem.</ListItem>
            <ListItem>This is a list ListItem.</ListItem>
            <ListItem>This is a list ListItem.</ListItem>
          </List>
        ),
      },
      {
        label: "Ordered list with alphabetically ordered bullets, lowercase",
        Code: () => (
          <List type="lower-alpha">
            <ListItem>This is a list ListItem.</ListItem>
            <ListItem>This is a list ListItem.</ListItem>
            <ListItem>This is a list ListItem.</ListItem>
          </List>
        ),
      },
      {
        label: "Ordered list with alphabetically ordered bullets, uppercase",
        Code: () => (
          <List type="upper-alpha">
            <ListItem>This is a list ListItem.</ListItem>
            <ListItem>This is a list ListItem.</ListItem>
            <ListItem>This is a list ListItem.</ListItem>
          </List>
        ),
      },
      {
        label: "Ordered list with roman number bullets, lowercase",
        Code: () => (
          <List type="lower-roman">
            <ListItem>This is a list ListItem.</ListItem>
            <ListItem>This is a list ListItem.</ListItem>
            <ListItem>This is a list ListItem.</ListItem>
          </List>
        ),
      },
      {
        label: "Ordered list with roman number bullets, uppercase",
        Code: () => (
          <List type="upper-roman">
            <ListItem>This is a list ListItem.</ListItem>
            <ListItem>This is a list ListItem.</ListItem>
            <ListItem>This is a list ListItem.</ListItem>
          </List>
        ),
      },
      {
        label: "Nested decimal list items",
        Code: () => (
          <List type="decimal">
            <ListItem>
              This is a ListItem.
              <List type="lower-roman">
                <ListItem>This is a ListItem.</ListItem>
                <ListItem>This is a ListItem.</ListItem>
                <ListItem>This is a ListItem.</ListItem>
              </List>
            </ListItem>
            <ListItem>This is a ListItem.</ListItem>
            <ListItem>This is a ListItem.</ListItem>
          </List>
        ),
      },
      {
        label: "Helper text",
        Code: () => (
          <List type="decimal">
            <ListItem helperText="This is helper text">
              This is a ListItem.
            </ListItem>
            <ListItem>This is a ListItem.</ListItem>
            <ListItem>This is a ListItem.</ListItem>
          </List>
        ),
      },
      {
        label: "Body small list items",
        Code: () => (
          <List variant="body-small">
            <ListItem>This is a body small ListItem.</ListItem>
            <ListItem>This is a body small ListItem.</ListItem>
            <ListItem>This is a body small ListItem.</ListItem>
          </List>
        ),
      },
      {
        label: "Subtitle list items",
        Code: () => (
          <List variant="subtitle">
            <ListItem>This is a subtitle ListItem.</ListItem>
            <ListItem>This is a subtitle ListItem.</ListItem>
            <ListItem>This is a subtitle ListItem.</ListItem>
          </List>
        ),
      },
      {
        label: "Subtitle small list items",
        Code: () => (
          <List variant="subtitle-small">
            <ListItem>This is a subtitle small ListItem.</ListItem>
            <ListItem>This is a subtitle small ListItem.</ListItem>
            <ListItem>This is a subtitle small ListItem.</ListItem>
          </List>
        ),
      },
      {
        label: "Decreased space between list items",
        Code: () => (
          <List space="xsmall">
            <ListItem>Decreased space below ListItem.</ListItem>
            <ListItem>Decreased space below ListItem.</ListItem>
            <ListItem>Decreased space below ListItem.</ListItem>
          </List>
        ),
      },
      {
        label: "Increased space between list items",
        Code: () => (
          <List space="xlarge">
            <ListItem>Increased space below ListItem.</ListItem>
            <ListItem>Increased space below ListItem.</ListItem>
            <ListItem>Increased space below ListItem.</ListItem>
          </List>
        ),
      },
      {
        label: "Positive Tone",
        Code: () => (
          <List tone="positive">
            <ListItem>This is a positive tone ListItem.</ListItem>
            <ListItem>This is a positive tone ListItem.</ListItem>
            <ListItem>This is a positive tone ListItem.</ListItem>
          </List>
        ),
      },
      {
        label: "Medium weight",
        Code: () => (
          <List weight="medium">
            <ListItem>This is a medium weight list ListItem.</ListItem>
            <ListItem>This is a medium weight list ListItem.</ListItem>
            <ListItem>This is a medium weight list ListItem.</ListItem>
          </List>
        ),
      },
      {
        label: "With TextLink",
        Code: () => (
          <List>
            <ListItem>
              This is a text <TextLink href="#">link</TextLink>.
            </ListItem>
            <ListItem>
              This is a secondary <TextLink href="#">link</TextLink>.
            </ListItem>
            <ListItem>
              This is a secondary <TextLink href="#">link</TextLink>.
            </ListItem>
          </List>
        ),
      },
    ],
  },
  snippets: [
    {
      label: "Unordered list with disc bullets",
      Code: () => (
        <List type="disc">
          <ListItem>This is a ListItem.</ListItem>
          <ListItem>This is a ListItem.</ListItem>
          <ListItem>This is a ListItem.</ListItem>
        </List>
      ),
    },
    {
      label: "Ordered list with stylised decimal number bullets",
      Code: () => (
        <List type="decimal-stylised">
          <ListItem>This is a list ListItem.</ListItem>
          <ListItem>This is a list ListItem.</ListItem>
          <ListItem>This is a list ListItem.</ListItem>
        </List>
      ),
    },
    {
      label: "Ordered list with decimal number bullets",
      Code: () => (
        <List type="decimal">
          <ListItem>This is a list ListItem.</ListItem>
          <ListItem>This is a list ListItem.</ListItem>
          <ListItem>This is a list ListItem.</ListItem>
        </List>
      ),
    },
  ],
};
