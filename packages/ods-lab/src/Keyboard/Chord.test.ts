import { chord, Chord } from "./Chord";

describe("Chord tests", () => {
  let c: Chord;
  beforeEach(() => {
    //Eb4Maj
    c = chord("Eb", 4, ["M3", "P5", "M7", "M9"]);
  });
  test("it can teoria notes ", () => {
    expect(c.notes()).toMatchInlineSnapshot(`
      Array [
        Object {
          "coord": Array [
            1,
            -2,
          ],
          "duration": Object {
            "dots": 0,
            "value": 4,
          },
        },
        Object {
          "coord": Array [
            3,
            -5,
          ],
          "duration": Object {
            "dots": 0,
            "value": 4,
          },
        },
        Object {
          "coord": Array [
            1,
            -1,
          ],
          "duration": Object {
            "dots": 0,
            "value": 4,
          },
        },
        Object {
          "coord": Array [
            3,
            -4,
          ],
          "duration": Object {
            "dots": 0,
            "value": 4,
          },
        },
      ]
    `);
  });

  test("should get simple notes", () => {
    expect(c.simple()).toMatchInlineSnapshot(`
      Array [
        "G4",
        "Bb4",
        "D5",
        "F5",
      ]
    `);
  });

  test("should get voicing", () => {
    expect(c.voicing()).toMatchInlineSnapshot(`
      Array [
        "M3",
        "P5",
        "M7",
        "M9",
      ]
    `);
  });

  test("should get rootNoteName", () => {
    expect(c.rootNoteName()).toEqual("Eb");
  });

  test("invertUp", () => {
    expect(c.invertUp().voicing()).toMatchInlineSnapshot(`
      Array [
        "P5",
        "M7",
        "M9",
        "M3",
      ]
    `);
  });

  test("doubleInvertUp", () => {
    expect(c.doubleInvertUp().voicing()).toMatchInlineSnapshot(`
      Array [
        "M7",
        "M9",
        "M3",
        "P5",
      ]
    `);
  });

  test("invertDown", () => {
    expect(c.invertDown().voicing()).toMatchInlineSnapshot(`
      Array [
        "M9",
        "M3",
        "P5",
        "M7",
      ]
    `);
  });

  test("doubleInvertDown", () => {
    expect(c.doubleInvertDown().voicing()).toMatchInlineSnapshot(`
      Array [
        "M7",
        "M9",
        "M3",
        "P5",
      ]
    `);
  });

  test("should get rootNoteName accidental", () => {
    expect(c.rootNote().accidental()).toEqual("b");
  });
});
