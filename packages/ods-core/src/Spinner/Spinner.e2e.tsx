import * as React from "react";
import { E2ETests } from "@origin-digital/ods-types";
import { Box } from "../Box/Box";
import { Column } from "../Column/Column";
import { Columns } from "../Columns/Columns";
import { Spinner, SpinnerSize, SpinnerTone } from "./Spinner";

export const tests: E2ETests = [
  {
    label: "Default Spinner",
    Code: () => <Spinner />,
  },
  {
    label: "Spinner in different colors",
    Code: () => (
      <Columns space="medium">
        {(["inherit", "secondary", "white"] as SpinnerTone[]).map((tone) => (
          <Column key={tone}>
            {tone === "white" ? (
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                style={{ backgroundColor: "rgb(236, 0, 0)", height: "100px" }}
              >
                <Spinner tone={tone} />
              </Box>
            ) : (
              <Spinner tone={tone} />
            )}
          </Column>
        ))}
      </Columns>
    ),
  },
  {
    label: "Spinner in different sizes",
    Code: () => (
      <Columns space="medium">
        {(["xsmall", "small", "medium", "large"] as SpinnerSize[]).map(
          (size) => (
            <Column key={size}>
              <Spinner size={size} />
            </Column>
          )
        )}
      </Columns>
    ),
  },
];
