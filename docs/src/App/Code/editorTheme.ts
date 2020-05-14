const tag = "#d2f0ff";
const attribute = "#3f75c6";
const value = "#ffb432";
const punctuation = "#f1f1f1";
const plainText = "#e3e3e3";
const meta = "#3f75c6";
const other = "#3f75c6";

export default {
  'code[class*="language-"]': {
    whiteSpace: "pre",
    fontSize: "14px",
    lineHeight: "24px",
    fontWeight: "500",
    color: plainText,
  },
  'pre[class*="language-"]': {
    whiteSpace: "pre",
    margin: 0,
  },
  comment: {
    color: meta,
  },
  prolog: {
    color: meta,
  },
  doctype: {
    color: meta,
  },
  cdata: {
    color: meta,
  },
  punctuation: {
    color: punctuation,
  },
  property: {
    color: attribute,
  },
  tag: {
    color: tag,
  },
  boolean: {
    color: value,
  },
  number: {
    color: value,
  },
  constant: {
    color: value,
  },
  symbol: {
    color: value,
  },
  selector: {
    color: value,
  },
  "attr-name": {
    color: attribute,
  },
  string: {
    color: value,
  },
  char: {
    color: value,
  },
  builtin: {
    color: other,
  },
  operator: {
    color: other,
  },
  entity: {
    color: other,
    cursor: "help",
  },
  url: {
    color: other,
  },
  "attr-value": {
    color: value,
  },
  keyword: {
    color: value,
  },
  regex: {
    color: other,
  },
  important: {
    color: other,
    fontWeight: "bold",
  },
  bold: {
    fontWeight: "bold",
  },
  italic: {
    fontStyle: "italic",
  },
  inserted: {
    color: "green",
  },
  deleted: {
    color: "red",
  },
};
