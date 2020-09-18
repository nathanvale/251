import * as React from "react";
import { E2ETests, GraphicToneVariants } from "@origin-digital/ods-types";
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
        {(["secondary", "white"] as GraphicToneVariants[]).map((tone) => (
          <Column key={tone}>
            {tone === "white" ? (
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                style={{ backgroundColor: "rgb(236, 0, 0)", height: "100px" }}
              >
                <Preloader tone={tone} />
              </Box>
            ) : (
              <Preloader tone={tone} />
            )}
          </Column>
        ))}
      </Columns>
    ),
  },
];
