import { configure } from "@testing-library/react";

require("jest-styled-components");

configure({ testIdAttribute: "data-id" });
