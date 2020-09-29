import { ComponentDocs } from "@origin-digital/ods-types";
import { docs as buttonDocs } from "../Button/Button.docs";
import { IconButtonProps } from "./IconButton";
import { generateIconButton } from "./IconButton.helper";

export const docs: ComponentDocs<IconButtonProps> = {
  category: "Interaction",
  componentName: "IconButton",
  description: "Renders a button with an icon inside",
  propDescriptions: {
    children: "A single icon from the @origin-digital/icons package or SvgIcon",
    color:
      "The color of the icon. If inside a text component you can set to inherit and the tone from the text will be used instead",
    noIconPadding:
      "Removes the visible padding around the icon but leaves the touchable area",
    href: buttonDocs.propDescriptions!.href,
    target: buttonDocs.propDescriptions!.target,
  },
  migrationGuide: false,
  examples: {
    default: {
      Code: () => generateIconButton(),
    },
    additional: [
      {
        label: "Inheriting text color",
        Code: () =>
          generateIconButton({ color: "inherit" }, {}, { tone: "positive" }),
      },
    ],
  },
  snippets: [
    {
      label: "Default",
      Code: () => generateIconButton(),
    },
  ],
};
