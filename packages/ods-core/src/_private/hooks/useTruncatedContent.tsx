import React from "react";
import { useTruncateStyles } from "@origin-digital/ods-typography";
import { Box, BoxProps } from "../../Box/Box";

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
