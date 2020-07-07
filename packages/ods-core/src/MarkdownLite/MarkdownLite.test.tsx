import React from "react";
import {
  render,
  getByTestId as odsGetByTestId,
  getAllByTestId as odsGetAllByTestId,
} from "@origin-digital/ods-testing-library";
import { Text } from "../Text/Text";
import { MarkdownLite } from "./MarkdownLite";

test("It should render bold text using astrix", () => {
  const { container, getByTestId } = render(
    <Text>
      <MarkdownLite>**bold text**</MarkdownLite>
    </Text>
  );

  expect(container.textContent).toBe("bold text");

  const strongText = getByTestId("strong");
  expect(strongText.textContent).toBe("bold text");
});

test("It should render bold text using underscore", () => {
  const { container, getByTestId } = render(
    <Text>
      <MarkdownLite>__bold text__</MarkdownLite>
    </Text>
  );

  expect(container.textContent).toBe("bold text");

  const strongText = getByTestId("strong");
  expect(strongText.textContent).toBe("bold text");
});

test("It should render multiple bold text", () => {
  const { container, getAllByTestId } = render(
    <Text>
      <MarkdownLite>
        this is the **first bold text** and **this is the second** bold text
      </MarkdownLite>
    </Text>
  );

  expect(container.textContent).toBe(
    "this is the first bold text and this is the second bold text"
  );

  const strongText = getAllByTestId("strong");
  expect(strongText[0].textContent).toBe("first bold text");
  expect(strongText[1].textContent).toBe("this is the second");
});

test("It should render italic text using astrix", () => {
  const { container, getByTestId } = render(
    <Text>
      <MarkdownLite>*italic text*</MarkdownLite>
    </Text>
  );

  expect(container.textContent).toBe("italic text");

  const strongText = getByTestId("emphasis");
  expect(strongText.textContent).toBe("italic text");
});

test("It should render italic text using underscore", () => {
  const { container, getByTestId } = render(
    <Text>
      <MarkdownLite>_italic text_</MarkdownLite>
    </Text>
  );

  expect(container.textContent).toBe("italic text");

  const strongText = getByTestId("emphasis");
  expect(strongText.textContent).toBe("italic text");
});

test("It should render multiple italic text", () => {
  const { container, getAllByTestId } = render(
    <Text>
      <MarkdownLite>
        this is the *first italic text* and *this is the second* italic text
      </MarkdownLite>
    </Text>
  );

  expect(container.textContent).toBe(
    "this is the first italic text and this is the second italic text"
  );

  const strongText = getAllByTestId("emphasis");
  expect(strongText[0].textContent).toBe("first italic text");
  expect(strongText[1].textContent).toBe("this is the second");
});

test("should render italic inside strong text", () => {
  const { container, getByTestId } = render(
    <Text>
      <MarkdownLite>
        here is some **bold text with *italic* inside** it
      </MarkdownLite>
    </Text>
  );
  expect(container.textContent).toBe(
    "here is some bold text with italic inside it"
  );

  const bold = getByTestId("strong");
  expect(bold.textContent).toBe("bold text with italic inside");

  const italic = odsGetByTestId(bold, "emphasis");
  expect(italic.textContent).toBe("italic");
});

test("should render a link", () => {
  const { container, getByTestId } = render(
    <Text>
      <MarkdownLite>[Origin Energy](http://origin.com.au)</MarkdownLite>
    </Text>
  );

  expect(container.textContent).toBe("Origin Energy");

  const link = getByTestId("origin-energy");
  expect(link.textContent).toBe("Origin Energy");
  expect(link.getAttribute("href")).toBe("http://origin.com.au");
  expect(link.getAttribute("target")).toBeNull();
});

test("should render two links which are identical", () => {
  const { container, getAllByTestId } = render(
    <Text>
      <MarkdownLite>
        The first [Origin Energy](http://origin.com.au) and the second [Origin
        Energy](http://origin.com.au) should render
      </MarkdownLite>
    </Text>
  );

  expect(container.textContent).toBe(
    "The first Origin Energy and the second Origin Energy should render"
  );

  const links = getAllByTestId("origin-energy");
  expect(links).toHaveLength(2);
  expect(links[0].textContent).toBe("Origin Energy");
  expect(links[0].getAttribute("href")).toBe("http://origin.com.au");
  expect(links[1].textContent).toBe("Origin Energy");
  expect(links[1].getAttribute("href")).toBe("http://origin.com.au");
});

test("should render a link with a target", () => {
  const linkMarkdown =
    '[Origin Energy](http://origin.com.au){:target="_blank"}';
  const { container, getByTestId } = render(
    <Text>
      <MarkdownLite>{linkMarkdown}</MarkdownLite>
    </Text>
  );

  expect(container.textContent).toBe("Origin Energy");

  const link = getByTestId("origin-energy");
  expect(link.textContent).toBe("Origin Energy");
  expect(link.getAttribute("href")).toBe("http://origin.com.au");
  expect(link.getAttribute("target")).toBe("_blank");
});

test("should render a link with bold and italic text within the link", () => {
  const { container, getByTestId } = render(
    <Text>
      <MarkdownLite>
        A link [with **multiple** text that **is bold** and *two blocks* of text
        which are *italic*](http://origin.com.au) as well
      </MarkdownLite>
    </Text>
  );

  expect(container).toMatchSnapshot();
  expect(container.textContent).toBe(
    "A link with multiple text that is bold and two blocks of text which are italic as well"
  );

  const link = getByTestId(
    "with-multiple-text-that-is-bold-and-two-blocks-of-text-which-are-italic"
  );
  expect(link.textContent).toBe(
    "with multiple text that is bold and two blocks of text which are italic"
  );
  expect(link.getAttribute("href")).toBe("http://origin.com.au");

  const bold = odsGetAllByTestId(link, "strong");
  expect(bold[0].textContent).toBe("multiple");
  expect(bold[1].textContent).toBe("is bold");

  const italic = odsGetAllByTestId(link, "emphasis");
  expect(italic[0].textContent).toBe("two blocks");
  expect(italic[1].textContent).toBe("italic");
});

[
  "This is **supposed to be bold but is not closed",
  "This is *supposed to be italic but is not closed",
  "This is **supposed to be bold*??",
].forEach((md) => {
  test(`should return '${md}'`, () => {
    const { container } = render(
      <Text>
        <MarkdownLite>{md}</MarkdownLite>
      </Text>
    );
    expect(container.textContent).toBe(md);
  });
});

test("should return text with italics", () => {
  const { container, getByTestId } = render(
    <Text>
      <MarkdownLite>This is *supposed to be bold**??</MarkdownLite>
    </Text>
  );

  expect(container.textContent).toBe("This is supposed to be bold*??");

  const italic = getByTestId("emphasis");
  expect(italic.textContent).toBe("supposed to be bold");
});

test("should throw an error if not wrapped in a Text component", () => {
  expect(() => render(<MarkdownLite>*bold text*</MarkdownLite>)).toThrow();
});
