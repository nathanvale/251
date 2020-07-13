import React from "react";

import { Text } from "@origin-digital/ods-core";

export const Pre: React.FC = ({ children }) => (
  <Text variant="body-small" tone="positive">
    <pre>{children}</pre>
  </Text>
);
