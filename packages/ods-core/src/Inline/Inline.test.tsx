import React from "react";
import { render } from "@origin-digital/ods-testing-library";
import { Placeholder } from "../Placeholder/Placeholder";
import { Inline } from "./Inline";

test("it renders", () => {
  const { container } = render(
    <Inline space="small">
      <Placeholder height={48} width={48} />
      <Placeholder height={48} width={48} />
      <Placeholder height={48} width={48} />
      <Placeholder height={48} width={48} />
      <Placeholder height={48} width={48} />
      <Placeholder height={48} width={48} />
      <Placeholder height={48} width={48} />
      <Placeholder height={48} width={48} />
      <Placeholder height={48} width={48} />
      <Placeholder height={48} width={48} />
    </Inline>
  );
  expect(container.firstChild).toMatchSnapshot();
});
