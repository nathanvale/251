import { render } from "@origin-digital/ods-testing-library";
import { generateTable } from "./Table.helper";
import { TableProps } from "..";

const renderTable = (tableProps: Partial<TableProps> = {}) =>
  render(generateTable(tableProps));

test("It renders", () => {
  const { container } = renderTable();
  expect(container).toMatchSnapshot();
});

test("It uses small padding", () => {
  const { container } = renderTable({ size: "small" });
  expect(container).toMatchSnapshot();
});

test("It uses medium padding", () => {
  const { container } = renderTable({ size: "medium" });
  expect(container).toMatchSnapshot();
});

test("It adds borders", () => {
  const { container } = renderTable({ bordered: true });
  expect(container).toMatchSnapshot();
});

test("It adds stripes", () => {
  const { container } = renderTable({ striped: true });
  expect(container).toMatchSnapshot();
});

test("It adds hover", () => {
  const { container } = renderTable({ hover: true });
  expect(container).toMatchSnapshot();
});

test("It adds sticky header", () => {
  const { container } = renderTable({ stickyHeader: true });
  expect(container).toMatchSnapshot();
});
