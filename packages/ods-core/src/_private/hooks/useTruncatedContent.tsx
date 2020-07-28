import React from "react";
import { Box, BoxProps } from "@origin-digital/ods-core";
import { useTruncateStyles } from "@origin-digital/ods-typography";

interface UseTruncatedContentProps {
  children: React.ReactNode;
  display?: BoxProps["display"];
  truncate?: boolean;
}

/**
 * Wraps a div around a typography component that needs to be truncated
 */
export const useTruncatedContent = ({
  truncate,
  children,
  display = "block",
}: UseTruncatedContentProps) => {
  const truncateStyles = useTruncateStyles();

  return truncate ? (
    <Box display={display} overflow="hidden" className={truncateStyles}>
      {children}
    </Box>
  ) : (
    children
  );
};
