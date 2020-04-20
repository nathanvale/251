/* eslint-disable babel/no-unused-expressions */
import React from "react";
import { HeadingVariants } from "@origin-digital/ods-types";
import {
  HeadingBaseProps,
  Heading as HeadingOriginal,
  HeadingProps as HeadingPropsOriginal,
} from "../../../../../packages/ods-core/src/Heading/Heading";

interface HeadingProps extends HeadingBaseProps {
  variant: HeadingVariants;
}

export const Heading = (props: HeadingProps) => (
  <HeadingOriginal {...(props as HeadingPropsOriginal)} />
);
