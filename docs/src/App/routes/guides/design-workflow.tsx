import React from "react";
import { Text, TextLink, Box, Stack } from "@origin-digital/ods-core";
import { useConfig } from "../../ConfigContext";
import { Page, PageSection } from "../../Page/Page";
import { DocsPage } from "../../../types";

const odsSupportLink = (
  <TextLink href="https://origindigital.slack.com/archives/CQ6T5T0R0">
    #design-system-support
  </TextLink>
);

const DesignWorkflow = () => {
  const { playroomUrl } = useConfig();
  const playroomLink = (
    <TextLink href={playroomUrl} target="_blank">
      Playroom
    </TextLink>
  );
  const sections: PageSection[] = [
    {
      title: "How do I get started with a new concept?",
      children: (
        <>
          <Text>
            All design tools are still at your disposal. Iterate quickly. Don’t
            feel like you need to get overly hung up on ODS early in the design
            process.
          </Text>
          <Text>
            That said, regardless of your tool of choice, it’s a good idea to
            familiarise yourself with our current component suite before getting
            started. Using existing patterns will always be faster than defining
            new ones.
          </Text>
        </>
      ),
    },
    {
      title: "Is there a library for Sketch?",
      children: (
        <>
          <Text>
            No. ODS is a living component system that’s designed to run in
            production, as opposed to being a static design library.
          </Text>
          <Text>
            Our objective with ODS is not to improve the quality of our mock
            ups, but rather to optimise the design workflow around the layer
            that our users actually interact with.
          </Text>
          <Text>
            Don’t feel like you need to meticulously recreate existing
            components in your mock ups. One of the major advantages of a design
            system like ODS is that it allows you to operate much more quickly
            during earlier stages of the design process.
          </Text>
          <Text>
            ODS also provides many features that are simply not supported by
            traditional design tools, including:
          </Text>
          <Box paddingLeft="xsmall">
            <Stack space="xxsmall">
              <Text>- Spacing and layout</Text>
              <Text>- Responsive design</Text>
              <Text>- Theming</Text>
              <Text>- Accessibility</Text>
            </Stack>
          </Box>
        </>
      ),
    },
    {
      title: "How do I leverage ODS in my design process?",
      children: (
        <>
          <Text>
            The best way to make use of ODS is for designers and developers to
            work closer together, and much earlier in the process than we
            typically have in the past. ODS’s primary goal is to enable you to
            design directly in the final medium, rather than constantly (and
            expensively!) translating from one medium to another.
          </Text>
          <Text>
            To help empower this workflow, we’ve provided {playroomLink} as a
            tool for rapidly prototyping with ODS. In this environment, you have
            access to the entire suite of components, along with an instant
            preview across a variety of screen sizes.
          </Text>
        </>
      ),
    },
    {
      title: "What is playroom? Why should I use it?",
      children: (
        <>
          <Text>
            {playroomLink} is a browser-based design tool that allows for
            real-time prototyping with interactive components, ensuring
            designers and developers are working together in the same medium,
            collaborating on the end product rather than handing off from one
            medium to another.
          </Text>
          <Text>
            If something already exists in ODS, it’s generally much more
            efficient to prototype with the components directly. As you iterate,
            you’ll be able to see how layouts react across different screen
            resolutions and brands, which is something that static design tools
            are simply unable to do.
          </Text>
          <Text>
            ODS Playroom deliberately rewards {playroomLink} deliberately
            rewards reuse of existing components. Creating something from
            scratch is harder than reaching for an existing pattern, and this is
            by design. While at first glance this might seem like an issue, this
            is actually an important step forward in regards to design
            consistency, build quality, and speed of delivery.
          </Text>
          <Text>
            Because {playroomLink} runs in the browser, you can easily share
            your work with others by copying and pasting the URL. It’s also open
            source and publicly available, which means you don’t need an account
            to create, view or edit designs. If you have any questions about
            something you’re working on, drop a link in {odsSupportLink} so we
            can help you out.
          </Text>
          <Text>
            Once you’re happy with a prototype in {playroomLink}, moving it into
            your application shouldn’t require much work at all since it’s built
            with the design system itself. This is in stark contrast to the
            traditional process of manually translating from Sketch. which is
            typically slow and error prone.
          </Text>
        </>
      ),
    },
    {
      title: "Do I need to write code?",
      children: (
        <>
          <Text>
            Not necessarily. You might prefer to pair up with a developer to
            iterate on your designs together. It’s entirely up to you.
          </Text>
          <Text>
            That said, ODS and {playroomLink} are specifically designed to be
            approachable for non-developers. While they may seem more
            intimidating than most design tools at first glance, we’ve worked
            hard to keep the learning curve as low as possible and to minimise
            the amount of knowledge required to be productive.
          </Text>
          <Text>
            This might sound like a massive change, but we’re hoping that it’s
            not as big of a jump as you might think. ODS components allow you to
            work with high-level design-centric terms like{" "}
            <TextLink href="/components/Text">Text</TextLink>,{" "}
            <TextLink href="/components/Card">Card</TextLink> and{" "}
            <TextLink href="/components/Columns">Columns</TextLink>, rather than
            the low-level technical details of HTML and CSS.
          </Text>
        </>
      ),
    },
    {
      title: "When should I use high fidelity design tools?",
      children: (
        <>
          <Text>
            If you’ve recognised a gap in our system, feel free to use
            traditional high fidelity design tools to define that new
            experience. However, when doing so, you should be mindful not to
            inadvertently redesign existing patterns.
          </Text>
          <Text>
            Always try to leverage lower level design elements such as colour,
            spacing, typography and iconography. If you need help designing new
            patterns, reach out in {odsSupportLink} to see if we can offer any
            assistance.
          </Text>
        </>
      ),
    },
    {
      title: "Won’t this slow us down?",
      children: (
        <>
          <Text>The goal is to actually let you design faster!</Text>
          <Text>
            If working in {playroomLink} is too slow, that’s probably a sign
            that either our design system is incomplete, or that we’re creating
            too many new patterns. It’s important that we discuss these issues
            early in the design process where we have more opportunity to fix
            them. In either case, please raise the issue with the lead designer
            for advice. This will help us to either improve the design system by
            adding missing features to it, or will help you figure out the best
            way of reusing existing patterns in ODS.
          </Text>
          <Text>
            Of course, this means that we may be slower in certain scenarios,
            but it’s an opportunity for us to invest in design standards that
            will continue to speed us up over the long term.
          </Text>
        </>
      ),
    },
    {
      title: "What if I need some help?",
      children: (
        <>
          <Text>
            We recommend reaching out in our {odsSupportLink} Slack channel.
            We’ll be more than happy to work with you to make sure that you’re
            comfortable working in this environment.
          </Text>
        </>
      ),
    },
    {
      title: "What if my designs look different to ODS?",
      children: (
        <>
          <Text>
            A design system’s job is to help standardise the look and feel of an
            entire product suite, not to match individual concept designs
            pixel-for-pixel. It’s a good idea to start by iterating on your
            design in {playroomLink} to try alternative approaches.
          </Text>
          <Text>
            You should be open to changing minor details that aren’t critical to
            the success of the product. The goal is to solve the end user’s
            problem, not to perfectly match an existing concept design.
          </Text>
          <Text>
            However, it’s natural that most designs will feature some degree of
            customisation that isn’t officially supported within the existing
            system. You may even be using a pattern that is unique to your
            product. Don’t feel like every single component needs to exist in
            ODS.
          </Text>
          <Text>
            It’s also possible that you’re using a pattern that should ideally
            be in ODS but hasn’t been built yet. In this case, it’s best to have
            a quick chat in {odsSupportLink} so we can give you personalised
            advice on how best to move forward.
          </Text>
        </>
      ),
    },
    {
      title: "How do I add a new component to ODS?",
      children: (
        <>
          <Text>
            Don’t get too hung up on adding new components to ODS. If you think
            a pattern is worth sharing outside of your team, let us know in{" "}
            {odsSupportLink}, but don’t let this get in the way of shipping real
            value to your users.
          </Text>
          <Text>
            ODS components have a very high bar of quality due to accessibility
            requirements and their widespread usage across different products
            and brands. As a result, it’s likely that your existing work will
            need to be revisited once we start standardising it.
          </Text>
        </>
      ),
    },
    {
      title: "What if I need a new component right away?",
      children: (
        <>
          <Text>
            Generally speaking, you should never be blocked waiting for ODS.
          </Text>
          <Text>
            Our job is to standardise existing patterns, not to hold back new
            ones. Your team should be perfectly capable of writing new
            components and custom styling within your project, and you should
            always err on the side of delivery. Your users are ultimately the
            number one priority.
          </Text>
          <Text>
            When you inevitably create something new, it’s a good idea to let us
            know in {odsSupportLink} so that we can keep an eye out for emerging
            patterns and work towards standardised solutions.
          </Text>
        </>
      ),
    },
    {
      title: "Have a question that wasn’t answered?",
      children: (
        <>
          <Text>Reach out to us in {odsSupportLink}.</Text>
        </>
      ),
    },
  ];
  return (
    <Page
      title="Design workflow"
      description="This guide is presented as a series of questions that you might
            reasonably ask if you’re trying to leverage ODS during a typical
            product design workflow."
      sections={sections}
    />
  );
};

const page: DocsPage = {
  title: "Design workflow",
  component: DesignWorkflow,
};

export default page;
