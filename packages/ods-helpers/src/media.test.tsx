import React from "react";
import {render} from "@testing-library/react";
import styled from "styled-components";
import {media} from "./media";

test("It should render with a xs media query", () => {
  const Test = styled.div`
    ${media.xs`
      color: red;
    `}
  `;
  const {container} = render(<Test />);
  expect(container.firstChild).toMatchSnapshot();
});

test("It should render with a sm media query", () => {
  const Test = styled.div`
    ${media.sm`
      color: red;
    `}
  `;
  const {container} = render(<Test />);
  expect(container.firstChild).toMatchSnapshot();
});

test("It should render with a md media query", () => {
  const Test = styled.div`
    ${media.md`
      color: red;
    `}
  `;
  const {container} = render(<Test />);
  expect(container.firstChild).toMatchSnapshot();
});

test("It should render with a lg media query", () => {
  const Test = styled.div`
    ${media.lg`
      color: red;
    `}
  `;
  const {container} = render(<Test />);
  expect(container.firstChild).toMatchSnapshot();
});

test("It should render with a xl media query", () => {
  const Test = styled.div`
    ${media.xl`
      color: red;
    `}
  `;
  const {container} = render(<Test />);
  expect(container.firstChild).toMatchSnapshot();
});
