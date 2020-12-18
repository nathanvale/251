import React from "react";
import { Inline, Button, Box } from "@origin-digital/ods-core";

export interface ChordCategoriesProps {}

const chordCategories = [
  "C",
  "Cm",
  "C7",
  "Cm7",
  "Cmaj7",
  "CmM7",
  "C6",
  "Cm6",
  "C6/9",
  "C5",
  "C9",
  "Cm9",
  "Cmaj9",
  "C11",
  "Cm11",
  "C13",
  "Cm13",
  "Cmaj13",
  "Cadd",
  "C7-5",
  "C7+5",
  "Csus",
  "Cdim",
  "Cdim7",
  "Cm7b5",
  "Caug",
  "Caug7",
];

export const ChordCategories = () => {
  return (
    <Inline space="small">
      {chordCategories.map((chord, index) => (
        <Box key={index} style={{ width: "80px" }}>
          <Button fullWidth variant="outlined" size="small" color="secondaryB">
            {chord}
          </Button>
        </Box>
      ))}
    </Inline>
  );
};

ChordCategories.displayName = "ChordCategories";

ChordCategories.defaultProps = {};
