/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import { Text, TextLink } from "@origin-digital/ods-core";
import { DocsPage } from "../../../types";
import { Page, PageSection } from "../../Page/Page";
import { TextStack } from "../../TextStack/TextStack";
import { useConfig } from "../../ConfigContext";

const odsSupportLink = (
  <TextLink href="https://origindigital.slack.com/archives/CQ6T5T0R0">
    #design-system-support
  </TextLink>
);

const Home = () => {
  const { playroomUrl } = useConfig();
  const sections: PageSection[] = [
    // {
    //   title: "What is a design system?",
    //   children: (
    //     <>
    //       {" "}
    //       <Text>
    //         Thanks to modern component-oriented architectures, the front-end
    //         community has been naturally gravitating towards design systems as a
    //         way of standardising our respective design languages into reusable
    //         components. When done successfully, it suddenly becomes trivial to
    //         translate standard designs into code. The Origin Design System (also
    //         known as <Strong>ODS</Strong>) is an implementation of this industry
    //         trend.
    //       </Text>
    //     </>
    //   ),
    // },

    // {
    //   title: "What makes ODS different?",
    //   children: (
    //     <>
    //       <Text>
    //         As much as possible, we want ODS code to make sense to
    //         non-developers. We&rsquo;re aggressively focused on simplicity,
    //         composability and consistency.
    //       </Text>
    //       <Text>
    //         Our goal is to empower designers and developers to iterate together
    //         in the same medium using the same components, reducing the need for
    //         high fidelity mock ups before development starts. We want to allow
    //         you to spend less time polishing mock ups and more time polishing
    //         the product. For more information about our philosophy, check out
    //         our{" "}
    //         <TextLink href="#/guides/design-workflow">
    //           design workflow guide
    //         </TextLink>
    //         .
    //       </Text>
    //     </>
    //   ),
    // },
    {
      title: "Getting started",
      children: (
        <TextStack>
          <Text>
            First, we recommend reading the{" "}
            <TextLink href="#/guides/development-workflow">
              development workflow
            </TextLink>{" "}
            guide. This captures our current views on how best to make use of
            ODS in your daily work.
          </Text>
          <Text>
            Next, you should read our{" "}
            <TextLink href="#/foundations/layout">layout guide</TextLink>. This
            goes into detail about how we manage component composition and
            layout, which forms the backbone of our system.
          </Text>
          <Text>
            Then, read our{" "}
            <TextLink href="#/foundations/tones">tones guide</TextLink> to get
            an understanding of the common set of tones (positive, critical,
            etc.) used throughout ODS.
          </Text>
          <Text>
            Finally, there&rsquo;s really no substitute for looking at all the
            available components, so just jump right in and start looking
            around. As you explore, you should familiarise yourself with our{" "}
            <TextLink href={playroomUrl}>ODS Playroom</TextLink> which allows
            you to try out the components without requiring a development
            environment.
          </Text>
        </TextStack>
      ),
    },
    {
      title: "Support",
      children: (
        <>
          <Text>
            If you work at Origin Digital, we have an internal Slack channels
            dedicated to support. For ODS related questions, head to{" "}
            {odsSupportLink}. We try to respond to everyone as quickly as we
            can, and we&rsquo;re always happy to help.
          </Text>
        </>
      ),
    },
    {
      title: "Inspiration",
      children: (
        <>
          <Text>
            Inspiration for ODS has come from Seek's design system{" "}
            <TextLink href="https://seek-oss.github.io/braid-design-system/">
              Braid
            </TextLink>
            , <TextLink href="https://material-ui.com/">Material-UI,</TextLink>{" "}
            <TextLink href="https://getbootstrap.com/docs/4.0/getting-started/introduction/>">
              Bootstrap 4
            </TextLink>{" "}
            and{" "}
            <TextLink href="http://basarat.com/gls">
              General Layout System (GLS) for React
            </TextLink>
            .
          </Text>
        </>
      ),
    },
  ];
  return (
    <Page
      isHomePage
      title="Origin Design System"
      description={
        <TextStack>
          <Text>
            Welcome to ODS, the themeable design system for{" "}
            <TextLink href="https://www.originenergy.com.au/about.html">
              Origin Energy
            </TextLink>
            .
          </Text>
          <Text>
            ODS aims to make brand-compliant UI development as fast as possible
            while maintaining a high level of quality and accessibility. In
            order to achieve this, ODS is implemented as a series of themeable{" "}
            <TextLink href="https://reactjs.org/">React</TextLink> components
            built on top of{" "}
            <TextLink href="https://material-ui.com/">Material-UI</TextLink> and{" "}
            <TextLink href="https://styled-system.com/">Styled System</TextLink>
            .
          </Text>
        </TextStack>
      }
      sections={sections}
    />
  );
};

const page: DocsPage = {
  title: "Home",
  exact: true,
  component: Home,
};

export default {
  "/": page,
};
