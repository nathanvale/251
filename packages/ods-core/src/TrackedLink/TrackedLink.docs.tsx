import React from "react";
import { ComponentDocs, ExampleDocs } from "@origin-digital/ods-types";
import { Text, TextProps } from "../Text/Text";
import { TextLink } from "../TextLink/TextLink";

export const example: ExampleDocs = {
  label: "Creating a non-text anchor with tracking",
  codeString: `import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  OriginThemeProvider,
  TrackedLink,
  Box,
} from "@origin-digital/ods-core";
import { LinkComponentProps } from "@origin-digital/ods-types";
import { TrackingProvider } from "../TrackingProvider/TrackingProvider";

const CustomLink = React.forwardRef<any, LinkComponentProps>((props, ref) => {
  const { href, ...restProps } = props;
  return href[0] === "/" ? (
    // For tracking to be active,  
    // You must wrap with React.forardRef and pass down.
    <ReactRouterLink
    to={href}
    ref={ref}
    {...restProps}
    />
    ) : (
    <a href={href} ref={ref} {...restProps} />
  );
});

export const App = () => (
  <OriginThemeProvider linkComponent={CustomLink}>
    <TrackingProvider onTrackingCapture={(props) => alert(props.label)}>
      <TrackedLink
        href=""
        trackingType="CustomLink"
        trackingLabel="The big red box is being tracked!"
        data-id="custom-link"
      >
        <Box backgroundColor="critical" padding="large" />
      </TrackedLink>
    </TrackingProvider>
  </OriginThemeProvider>
);
`,
};
export const docs: ComponentDocs<TextProps> = {
  category: "Atomic",
  componentName: "TrackedLink",
  description: (
    <Text>
      If your app is wrapped in a{" "}
      <TextLink href="#/components/TrackingProvider">TrackingProvider</TextLink>
      , <TextLink href="#/components/TrackedLink">TrackedLink</TextLink> will
      allow you to create a non-text anchor with tracking. The link type will be
      an <code>&lt;a/&gt;</code> tag by default, unless you have configured your
      own in the{" "}
      <TextLink href="#/components/OriginThemeProvider">
        OriginThemeProvider
      </TextLink>
      . Before taking this approach please make sure ODS interaction components
      such as <TextLink href="#/components/TextLink">TextLink</TextLink>,{" "}
      <TextLink href="#/components/ChevronLink">ChevronLink</TextLink> or{" "}
      <TextLink href="#/components/ChevronHeadingLink">
        ChevronHeadingLink
      </TextLink>{" "}
      already suit your requirements.
    </Text>
  ),
  propDescriptions: {},
  migrationGuide: false,

  examples: {
    default: {},
    additional: [example],
  },
  snippets: [],
};
