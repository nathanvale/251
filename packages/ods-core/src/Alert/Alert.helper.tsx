import React from "react";
import { Text } from "../Text";
import { TextLink } from "../TextLink";
import { Strong } from "../Strong";
import { Emphasis } from "../Emphasis";
import { Alert, AlertProps } from "./Alert";

export const alertTones: AlertProps["tone"][] = [
  "critical",
  "caution",
  "info",
  "neutral",
  "positive",
  "promote",
];
export const alertVariants: AlertProps["variant"][] = ["standard", "filled"];

export const generateAlert = (props: Partial<AlertProps> = {}) => (
  <Alert {...props}>
    <Text>
      Lorem ipsum <Strong>dolor</Strong> sit amet,{" "}
      <Emphasis>consectetur</Emphasis> adipiscing elit. Suspendisse facilisis{" "}
      <TextLink href="#">posuere</TextLink> sodales.
    </Text>
  </Alert>
);
