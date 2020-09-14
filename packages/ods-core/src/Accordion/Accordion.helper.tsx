import React from "react";
import { Text } from "../Text/Text";
import {
  Accordion,
  AccordionBaseProps,
  AccordionControlledProps,
  AccordionUncontrolledProps,
} from "./Accordion";

const defaultProps = {
  id: "my-accordion",
  summary: "My accordion title",
  children: (
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
      facilisis posuere sodales. Aliquam sit amet mauris ut metus fringilla
      ullamcorper. Suspendisse maximus mi at fringilla convallis. Sed pretium
      vitae libero sed vestibulum. Quisque suscipit vitae ipsum vel
      sollicitudin. In mollis quam neque.
    </Text>
  ),
};

export const generateAccordion = (
  props: Partial<AccordionBaseProps> &
    AccordionUncontrolledProps & { key?: number } = {}
) => <Accordion {...{ ...defaultProps, ...props }} />;

export const generateControlledAccordion = (
  props: Partial<AccordionBaseProps> &
    AccordionControlledProps & { key?: number }
) => <Accordion {...{ ...defaultProps, ...props }} />;
