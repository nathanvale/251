import React from "react";

import { Text } from "@origin-digital/ods-core";

export const Monospace: React.FC = ({ children }) => (
  <Text variant="body">
    <code>{children}</code>
  </Text>
);
