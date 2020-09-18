import React from "react";
import { Placeholder } from "../Placeholder";
import { Box } from "../Box";
import { AlertBanner, AlertBannerProps } from "./AlertBanner";

export const generateAlertBanner = (props: Partial<AlertBannerProps> = {}) => (
  <Box>
    <AlertBanner {...props}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit...
    </AlertBanner>

    <Box paddingY="medium">
      <Placeholder height={400} />
    </Box>
  </Box>
);
