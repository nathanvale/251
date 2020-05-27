/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

import { render, fireEvent } from "@origin-digital/ods-testing-library";
import {
  LinkComponentType,
  LinkComponentProps,
} from "@origin-digital/ods-types";
import { OriginThemeProvider, useLinkComponent } from "./OriginThemeProvider";

test("it renders a default link implementation", () => {
  const TextLink = ({ children, href }: LinkComponentProps) => {
    const LinkComponent = useLinkComponent();
    return <LinkComponent href={href}>{children}</LinkComponent>;
  };

  const { container } = render(
    <OriginThemeProvider>
      <TextLink href="https://www.test.com/">Click me</TextLink>
    </OriginThemeProvider>
  );

  expect(container.firstChild).toMatchSnapshot();
});

test("it handles a custom link implementation", () => {
  const TextLink = ({ children, href }: LinkComponentProps) => {
    const LinkComponent = useLinkComponent();
    return <LinkComponent href={href}>{children}</LinkComponent>;
  };

  const onClick = jest.fn();

  const CustomLink: LinkComponentType = ({ href, ...restProps }) => (
    <a href={href} onClick={onClick} {...restProps} />
  );

  const { getByText } = render(
    <OriginThemeProvider linkComponent={CustomLink}>
      <TextLink href="https://www.test.com/">Click me</TextLink>
    </OriginThemeProvider>
  );

  const link = getByText("Click me");
  fireEvent.click(link);

  expect(onClick).toBeCalledTimes(1);

  expect(getByText("Click me").closest("a")).toHaveAttribute(
    "href",
    "https://www.test.com/"
  );
});
