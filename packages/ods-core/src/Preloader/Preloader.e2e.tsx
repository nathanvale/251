import * as React from "react";
import { E2ETests, GraphicColorVariants } from "@origin-digital/ods-types";
import { Box } from "../Box";
import { Column } from "../Column";
import { Columns } from "../Columns";
import { Preloader } from "./Preloader";

export const tests: E2ETests = [
  {
    label: "Default Preloader",
    Code: () => <Preloader />,
  },
  {
    label: "Preloader in different colors",
    Code: () => (
      <Columns space="medium">
        {(["secondary", "white"] as GraphicColorVariants[]).map((color) => (
          <Column key={color}>
            {color === "white" ? (
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                style={{ backgroundColor: "rgb(236, 0, 0)", height: "100px" }}
              >
                <Preloader color={color} />
              </Box>
            ) : (
              <Preloader color={color} />
            )}
          </Column>
        ))}
      </Columns>
    ),
  },
];
