import React from "react";
import {
  HeadingBaseProps,
  Heading as HeadingOriginal,
} from "../../../../../packages/ods-core/src/Heading/Heading";

interface HeadingProps extends HeadingBaseProps {
  variant: "h1" | "h2" | "h3" | "h4";
}
/**
 * We are pointing Heading here for autocomplete in playroonm
 * because of the type intersection we have in core HeadingProps.
 * Weight prop doesn't exist on the interface unless it is in
 * a variant conditional so we have to force playroom to look at a
 * faux type instead.
 */
export const Heading = (props: HeadingProps) => <HeadingOriginal {...props} />;
