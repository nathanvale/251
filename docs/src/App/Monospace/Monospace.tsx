import React from "react";

import { Text } from "@origin-digital/ods-core";

export const Monospace: React.FC = ({ children }) => (
  <Text variant="body-small" tone="positive">
    <code>{children}</code>
  </Text>
);
