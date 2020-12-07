import {
  whiteIndex,
  rangeOptions,
  accidentals,
  getKeySizes,
  getOctave,
  upperWidth,
  upperOffset,
  keyboard,
  convertTeoriaChordToActiveKeys,
} from "./utils";
import { Key } from "./KeyboardModel";
import { chord } from "./Chord";

describe("Keyboard - utils tests", () => {
  test("it have the correct accidentals ", () => {
    expect(accidentals).toMatchInlineSnapshot(`
      Array [
        1,
        3,
        6,
        8,
        10,
      ]
    `);
  });
  test("it should get the whiteIndex ", () => {
    expect(whiteIndex(0)).toEqual(0);
    expect(whiteIndex(10)).toEqual(6);
    expect(whiteIndex(36)).toEqual(21);
  });

  test("it should get the rangeOptions ", () => {
    expect(rangeOptions(["A0", "C8"])).toEqual({
      keyCount: 88,
      keyOffset: 9,
    });
    expect(rangeOptions(["C3", "C6"])).toEqual({ keyCount: 37, keyOffset: 0 });
  });

  test("it should get the getKeySizes", () => {
    expect(
      getKeySizes({
        fontFamily: "helvetica",
        scaleX: 1,
        scaleY: 1,
        lowerWidth: 23.6,
        palette: ["#39383D", "#F2F2EF"],
        stroke: "#39383D",
        strokeWidth: 1,
        offsetY: 2,
        offsetX: 0,
        upperOffset: 0,
        upperWidth: 0,
        upperHeight: 100,
        lowerHeight: 45,
        keyCount: 37,
        keyOffset: 0,
        range: ["C3", "E3"],
        leftHandKeysColor: "red",
        rightHandKeysColor: "blue",
      })
    ).toMatchSnapshot();
  });

  test("it should get the keyboard", () => {
    expect(keyboard).toMatchSnapshot();
  });

  test("it should get the getOctave ", () => {
    expect(getOctave(0, ["C3", "C6"])).toEqual(3);
    expect(getOctave(10, ["C3", "C6"])).toEqual(3);
    expect(getOctave(36, ["C3", "C6"])).toEqual(6);
  });

  test("it should get the upperWidth ", () => {
    const key: Key = {
      sharp: false,
      pitches: ["C", "B#"],
      upperOffset: 0,
      upperWidth: 15.05,
      upperHeight: 100,
      lowerHeight: 45,
      lowerWidth: 23.6,
      fill: "#F2F2EF",
      contrast: "#39383D",
      stroke: "#39383D",
      strokeWidth: 1,
      index: 0,
      scaleX: 0,
      scaleY: 0,
      offsetX: 0,
      notes: [],
    };
    expect(upperWidth(key, 0, 0, 37)).toEqual(15.05);
  });

  test("it should get the upperOffset", () => {
    const key: Key = {
      sharp: false,
      pitches: ["C", "B#"],
      upperOffset: 0,
      upperWidth: 15.05,
      upperHeight: 100,
      lowerHeight: 45,
      lowerWidth: 23.6,
      fill: "#F2F2EF",
      contrast: "#39383D",
      stroke: "#39383D",
      strokeWidth: 1,
      index: 0,
      scaleX: 0,
      scaleY: 0,
      offsetX: 0,
      notes: [],
    };
    expect(upperOffset(key, 1, 0)).toEqual(0);
  });

  test("should convertTeoriaChordToActiveKeys", () => {
    expect(
      convertTeoriaChordToActiveKeys(chord("C", 4, ["M3", "P5", "M7", "M9"]))
    ).toMatchInlineSnapshot(`
      Object {
        "B4": Object {
          "label": "M7",
        },
        "D5": Object {
          "label": "M9",
        },
        "E4": Object {
          "label": "M3",
        },
        "G4": Object {
          "label": "P5",
        },
      }
    `);
  });
});
