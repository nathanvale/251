import {
  getKeyOffset,
  getKeySizes,
  rangeOptions,
  upperOffset,
  whiteIndex,
  getOctave,
  getPoints,
  upperWidth,
  convertTeoriaChordToActiveKeys,
} from "./utils";
import { Chord } from "./Chord";

export type KeyNameBasicVariants =
  | "C"
  | "Cb"
  | "C#"
  | "D"
  | "Db"
  | "D#"
  | "E"
  | "Eb"
  | "E#"
  | "F"
  | "Fb"
  | "F#"
  | "G"
  | "Gb"
  | "G#"
  | "A"
  | "Ab"
  | "A#"
  | "B"
  | "Bb"
  | "B#";

export type KeyNameVariants =
  | "A0"
  | "Ab0"
  | "A#0"
  | "B0"
  | "Bb0"
  | "B#0"
  | "C1"
  | "Cb1"
  | "C#1"
  | "D1"
  | "Db1"
  | "D#1"
  | "E1"
  | "Eb1"
  | "E#1"
  | "F1"
  | "Fb1"
  | "F#1"
  | "G1"
  | "Gb1"
  | "G#1"
  | "A1"
  | "Ab1"
  | "A#1"
  | "B1"
  | "Bb1"
  | "B#1"
  | "C2"
  | "Cb2"
  | "C#2"
  | "D2"
  | "Db2"
  | "D#2"
  | "E2"
  | "Eb2"
  | "E#2"
  | "F2"
  | "Fb2"
  | "F#2"
  | "G2"
  | "Gb2"
  | "G#2"
  | "A2"
  | "Ab2"
  | "A#2"
  | "B2"
  | "Bb2"
  | "B#2"
  | "C3"
  | "Cb3"
  | "C#3"
  | "D3"
  | "Db3"
  | "D#3"
  | "E3"
  | "Eb3"
  | "E#3"
  | "F3"
  | "Fb3"
  | "F#3"
  | "G3"
  | "Gb3"
  | "G#3"
  | "A3"
  | "Ab3"
  | "A#3"
  | "B3"
  | "Bb3"
  | "B#3"
  | "C4"
  | "Cb4"
  | "C#4"
  | "D4"
  | "Db4"
  | "D#4"
  | "E4"
  | "Eb4"
  | "E#4"
  | "F4"
  | "Fb4"
  | "F#4"
  | "G4"
  | "Gb4"
  | "G#4"
  | "A4"
  | "Ab4"
  | "A#4"
  | "B4"
  | "Bb4"
  | "B#4"
  | "C5"
  | "Cb5"
  | "C#5"
  | "D5"
  | "Db5"
  | "D#5"
  | "E5"
  | "Eb5"
  | "E#5"
  | "F5"
  | "Fb5"
  | "F#5"
  | "G5"
  | "Gb5"
  | "G#5"
  | "A5"
  | "Ab5"
  | "A#5"
  | "B5"
  | "Bb5"
  | "B#5"
  | "C6"
  | "Cb6"
  | "C#6"
  | "D6"
  | "Db6"
  | "D#6"
  | "E6"
  | "Eb6"
  | "E#6"
  | "F6"
  | "Fb6"
  | "F#6"
  | "G6"
  | "Gb6"
  | "G#6"
  | "A6"
  | "Ab6"
  | "A#6"
  | "B6"
  | "Bb6"
  | "B#6"
  | "C7"
  | "Cb7"
  | "C#7"
  | "D7"
  | "Db7"
  | "D#7"
  | "E7"
  | "Eb7"
  | "E#7"
  | "F7"
  | "Fb7"
  | "F#7"
  | "G7"
  | "Gb7"
  | "G#7"
  | "A7"
  | "Ab7"
  | "A#7"
  | "B7"
  | "Bb7"
  | "B#7"
  | "C8";

export interface KeyboardOptions {
  fontFamily: string;
  scaleX: number;
  scaleY: number;
  lowerWidth: number;
  palette: string[];
  stroke: string;
  strokeWidth: number;
  offsetY: number;
  offsetX: number;
  upperOffset: number;
  upperWidth: number;
  upperHeight: number;
  lowerHeight: number;
  keyCount: number;
  keyOffset: number;
  range: string[];
  leftHandKeysColor: string;
  rightHandKeysColor: string;
}

export interface KeyCore {
  sharp: boolean;
  pitches: [string, string] | [string];
  upperOffset: number;
  upperWidth: number;
}

export interface KeyDetail {
  upperHeight: number;
  lowerHeight: number;
  lowerWidth: number;
  fill: string;
  contrast: string;
  stroke: string;
  strokeWidth: number;
  index: number;
  scaleX: number;
  scaleY: number;
  offsetX: number;
  notes: KeyNameVariants[];
}

export type ActiveKeys = Partial<Record<KeyNameVariants, { label: string }>>;

export type Key = KeyCore & KeyDetail;

export interface InactiveKeyPolygon {
  points: string;
  style: {
    fill: string;
    stroke: string;
    strokeWidth: number;
  };
}

export interface ActiveRenderKey {
  polygon: ActiveKeyPolygon;
  text1: ActiveKeyText;
  text2: ActiveKeyText;
}

export interface ActiveKeyPolygon {
  points: string;
  style: {
    fill: string;
    stroke: string;
    strokeWidth: number;
  };
}

export interface ActiveKeyText {
  x: number;
  y: number;
  textAnchor: string;
  fontSize: string;
  fill: string | undefined;
  fontWeight: number;
  fontFamily: string | undefined;
  value: string;
}

export class KeyboardModel {
  private _width: number = 0;
  private _height: number = 0;
  private _options: KeyboardOptions = {
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
    keyCount: 88,
    keyOffset: 0,
    range: ["A0", "C8"],
    leftHandKeysColor: "red",
    rightHandKeysColor: "blue",
  };
  private _activeLeftHandKeys: ActiveRenderKey[] = [];
  private _activeRightHandKeys: ActiveRenderKey[] = [];

  private _keysMap: Partial<
    Record<
      KeyNameVariants,
      {
        key: Key;
        polygon: InactiveKeyPolygon;
      }
    >
  >;

  private _keys: {
    key: Key;
    polygon: InactiveKeyPolygon;
  }[];

  constructor(options?: Partial<KeyboardOptions>) {
    options = options || this._options;
    if (options?.range) {
      options = {
        ...options,
        ...rangeOptions(options.range),
      };
    }
    this._options = { ...this._options, ...options } || this._options;

    this._keysMap = {};
    const keySizes = getKeySizes(this._options);
    const {
      keyCount,
      scaleY,
      scaleX,
      lowerWidth,
      strokeWidth,
      keyOffset,
    } = this._options;
    this._keys = Array(keyCount + keyOffset)
      .fill(0)
      .map((_, index, _keys) => keySizes[index % 12])
      .map<Key>((key, index, _keys) => {
        const octave = getOctave(index, this._options.range);
        const notes = key.pitches.map(
          (pitch) => String(pitch + octave) as KeyNameVariants
        );
        const renderedKey: Key = {
          pitches: key.pitches,
          index,
          notes,
          scaleX,
          scaleY,
          fill: key.fill,
          contrast: key.contrast,
          strokeWidth: key.strokeWidth,
          stroke: key.stroke,
          sharp: key.sharp,
          upperHeight: key.upperHeight * scaleY,
          lowerHeight: key.lowerHeight * scaleY,
          upperWidth: upperWidth(key, index, keyOffset, keyCount) * scaleX,
          lowerWidth: key.lowerWidth * scaleX,
          upperOffset: upperOffset(key, index, keyOffset) * scaleX,
          offsetX:
            getKeyOffset(index, _keys, lowerWidth, keyOffset) * scaleX +
            Math.ceil(strokeWidth / 2),
        };
        return renderedKey;
      })
      .filter((key) => key.index >= keyOffset)
      .map((key) => {
        const obj = {
          key,
          polygon: {
            points: getPoints(key, this._options.offsetY)
              .map((p) => p.join(","))
              .join(" "),
            style: {
              fill: key.fill,
              stroke: key.stroke,
              strokeWidth: key.strokeWidth,
            },
          },
        };
        this._keysMap[key.notes[0]] = obj;
        this._keysMap[key.notes[1]] = obj;
        return {
          key,
          polygon: {
            points: getPoints(key, this._options.offsetY)
              .map((p) => p.join(","))
              .join(" "),
            style: {
              fill: key.fill,
              stroke: key.stroke,
              strokeWidth: key.strokeWidth,
            },
          },
        };
      });

    const dimensions = this._getSVGDimensions();
    this._width = dimensions[0];
    this._height = dimensions[1] + this._options.strokeWidth * 2;
  }

  playLeftHandKeys(keys: ActiveKeys | Chord) {
    if (keys instanceof Chord) {
      keys = convertTeoriaChordToActiveKeys(keys);
    }
    this._activeLeftHandKeys = this._getActiveRenderKey(
      keys,
      this._options.leftHandKeysColor
    );
    return this;
  }

  playRightHandKeys(keys: ActiveKeys | Chord) {
    if (keys instanceof Chord) {
      keys = convertTeoriaChordToActiveKeys(keys);
    }
    this._activeRightHandKeys = this._getActiveRenderKey(
      keys,
      this._options.rightHandKeysColor
    );
    return this;
  }

  getOptions() {
    return this._options;
  }
  getWidth() {
    return this._width;
  }
  getHeight() {
    return this._height;
  }

  getPolygons() {
    return this._keys;
  }

  getLeftHandActiveKeys() {
    return this._activeLeftHandKeys;
  }

  getRightHandActiveKeys() {
    return this._activeRightHandKeys;
  }

  private _getActiveRenderKey(
    keys: ActiveKeys,
    fill: string
  ): ActiveRenderKey[] {
    return Object.keys(keys).map<ActiveRenderKey>((keyName) => {
      const key = this._keysMap[keyName as KeyNameVariants];

      if (!key) {
        throw new Error(`Key out of range${keyName}`);
      }

      const textElements = this._getTextElements(key.key);
      if (keys[keyName as KeyNameVariants]) {
        textElements.text1.value = keyName;
        textElements.text2.value =
          keys[keyName as KeyNameVariants]?.label || "";
      }
      const polygon = key.polygon;
      return {
        ...textElements,
        polygon: {
          ...polygon,
          style: { fill, strokeWidth: 0, stroke: "" },
        },
      };
    });
  }

  private _getSVGDimensions() {
    const {
      scaleX,
      scaleY,
      lowerWidth,
      keyCount,
      lowerHeight,
      upperHeight,
      strokeWidth,
    } = this._options;
    return [
      scaleX * lowerWidth * whiteIndex(keyCount + 1),
      (lowerHeight + upperHeight) * scaleY,
    ].map((c) => Math.round(c + strokeWidth * 2)); // >svg adds stroke around actual widths
  }

  private _getTextElements(
    key: Key
  ): { text1: ActiveKeyText; text2: ActiveKeyText } {
    const fill = "white";

    const {
      offsetX,
      upperHeight,
      lowerHeight,
      upperOffset,
      strokeWidth,
      upperWidth,
    } = key;

    const top = false;
    const { fontFamily } = this._options;
    const magic = 14.5;
    const radius = (key.scaleX * (magic - strokeWidth * 2)) / 2;
    const w = key.lowerWidth || key.upperWidth;
    const x = top ? offsetX + upperWidth / 2 + upperOffset : offsetX + w / 2;
    const y = top ? radius * 2 : upperHeight + lowerHeight - 4;

    const baseText = {
      textAnchor: "middle",
      fontSize: "10px",
      fill,
      fontWeight: 600,
      fontFamily,
      value: "",
    };

    const text1 = {
      ...baseText,
      x,
      y: y - radius,
    };

    const text2 = {
      ...baseText,
      fontSize: "12px",
      x,
      y,
    };

    return {
      text1,
      text2,
    };
  }
}
