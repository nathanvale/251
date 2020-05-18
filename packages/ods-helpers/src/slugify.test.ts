import { slugify } from "./slugify";

describe("slugify", () => {
  const testData = [
    [
      "the quick brown fox jumped over the lazy dog",
      "the-quick-brown-fox-jumped-over-the-lazy-dog",
    ],
    [
      "the quick brown fox jumped over the lazy dog?",
      "the-quick-brown-fox-jumped-over-the-lazy-dog",
    ],
    [
      "the-quick-brown-fox-jumped-over-the-lazy-dog?",
      "the-quick-brown-fox-jumped-over-the-lazy-dog",
    ],
  ] as const;

  test.each(testData)("%p returns %p", (props, expected) => {
    expect(slugify(props)).toEqual(expected);
  });
});
