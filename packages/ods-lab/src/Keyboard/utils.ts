import {
  Key,
  KeyCore,
  KeyboardOptions,
  KeyDetail,
  ActiveKeys,
} from "./KeyboardModel";
import { Chord } from "./chord";

export const keyboard: KeyCore[] = [
  {
    sharp: false,
    pitches: ["C", "B#"],
    upperOffset: 0,
    upperWidth: 15.05,
  },
  {
    sharp: true,
    pitches: ["Db", "C#"],
    upperOffset: 0,
    upperWidth: 12.7,
  },
  {
    sharp: false,
    pitches: ["D"],
    upperOffset: 4.15,
    upperWidth: 15.3,
  },
  {
    sharp: true,
    pitches: ["Eb", "D#"],
    upperOffset: 0,
    upperWidth: 12.7,
  },
  {
    sharp: false,
    pitches: ["E"],
    upperOffset: 8.55,
    upperWidth: 15.05,
  },
  {
    sharp: false,
    pitches: ["F", "E#"],
    upperOffset: 0,
    upperWidth: 13.95,
  },
  {
    sharp: true,
    pitches: ["Gb", "F#"],
    upperOffset: 0,
    upperWidth: 12.7,
  },
  {
    sharp: false,
    pitches: ["G"],
    upperOffset: 3.05,
    upperWidth: 14.2,
  },
  {
    sharp: true,
    pitches: ["Ab", "G#"],
    upperOffset: 0,
    upperWidth: 12.7,
  },
  {
    sharp: false,
    pitches: ["A"],
    upperOffset: 6.35,
    upperWidth: 14.2,
  },
  {
    sharp: true,
    pitches: ["Bb", "A#"],
    upperOffset: 0,
    upperWidth: 12.7,
  },
  {
    sharp: false,
    pitches: ["B", "Cb"],
    upperOffset: 9.65,
    upperWidth: 13.95,
  },
];

export const accidentals = [1, 3, 6, 8, 10];

export function whiteIndex(index: number) {
  return (
    Array(index % 12)
      .fill(0)
      .filter((_, i) => !accidentals.includes(i)).length +
    Math.floor(index / 12) * 7
  );
}

export function rangeOptions(range: string[]) {
  const pitches = range.map((note) => note.slice(0, -1));
  const first = keyboard.find((key) => key.pitches.includes(pitches[0]));
  const last = keyboard.find((key) => key.pitches.includes(pitches[1]));
  const offsetLeft = first ? keyboard.indexOf(first) : 0;
  const offsetRight = last ? 12 - keyboard.indexOf(last) : 0;
  const octaves = range.map((note) =>
    parseInt(note.slice(note.length - 1), 10)
  );
  const keyCount =
    (octaves[1] - octaves[0] + 1) * 12 - offsetLeft - offsetRight + 1;
  return { keyCount, keyOffset: offsetLeft };
}

export function getPoints(key: Key, offsetY: number) {
  const {
    upperOffset,
    offsetX,
    upperHeight,
    lowerHeight,
    upperWidth,
    lowerWidth,
  } = key;
  const totalHeight = lowerHeight + upperHeight;
  return [
    [upperOffset + offsetX, offsetY],
    [upperOffset + offsetX, upperHeight + offsetY],
    [offsetX, upperHeight + offsetY],
    [offsetX, totalHeight + offsetY],
    [lowerWidth + offsetX, totalHeight + offsetY],
    [lowerWidth + offsetX, upperHeight + offsetY],
    [upperWidth + upperOffset + offsetX, upperHeight + offsetY],
    [upperWidth + upperOffset + offsetX, offsetY],
  ];
}

export function getKeySizes(options: KeyboardOptions) {
  const {
    lowerHeight,
    upperHeight,
    lowerWidth,
    strokeWidth,
    palette,
    stroke,
  } = options;
  return keyboard.map<Key>((key, index) =>
    Object.assign(key, {
      // add black/white specific props > black keys have no lower part
      upperHeight,
      lowerHeight: accidentals.includes(index) ? 0 : lowerHeight,
      lowerWidth: accidentals.includes(index) ? key.upperWidth : lowerWidth,
      fill: accidentals.includes(index) ? palette[0] : palette[1],
      contrast: accidentals.includes(index) ? palette[1] : palette[0],
      stroke,
      strokeWidth,
    } as KeyDetail)
  );
}

export function getOctave(index: number, range: string[]) {
  const overflow = Math.floor(index / 12);
  const octaves = range.map((note) =>
    parseInt(note.slice(note.length - 1), 10)
  );
  const octave = overflow + octaves[0];
  return octave;
}

export function upperWidth(
  key: Key,
  index: number,
  offset: number,
  keyCount: number
) {
  const isFirst = (index: number) => index === offset;
  const isLast = (index: number) => index === keyCount + offset - 1;
  if (isFirst(index)) {
    return key.upperWidth + key.upperOffset;
  }
  if (isLast(index)) {
    return key.lowerWidth - key.upperOffset;
  }
  return key.upperWidth;
}

export function upperOffset(key: Key, index: number, keyOffset: number) {
  const isFirst = (index: number) => index === keyOffset;
  if (isFirst(index)) {
    return 0;
  }
  return key.upperOffset;
}

export function getKeyOffset(
  index: number,
  keys: Key[],
  lowerWidth: number,
  keyOffset = 0
) {
  const wi = whiteIndex(index);
  const oi = whiteIndex(keyOffset);
  let firstOffset = keys[keyOffset].upperOffset;
  if (accidentals.includes(keyOffset % 12)) {
    const whiteKeyBefore = keyboard[(keyOffset + 12 - 1) % 12];
    firstOffset -=
      lowerWidth - (whiteKeyBefore.upperWidth + whiteKeyBefore.upperOffset);
  }
  return !accidentals.includes(index % 12)
    ? wi * lowerWidth - oi * lowerWidth
    : keys
        .slice(keyOffset, index)
        .reduce((sum, _key, _index) => sum + _key.upperWidth, 0) + firstOffset;
}

export const convertTeoriaChordToActiveKeys = (c: Chord): ActiveKeys => {
  const voicing = c.voicing().toString().split(",");
  const notes = c.simple();
  const activeKeys = notes.reduce(
    (previousValue: ActiveKeys, currentValue: string, currentIndex: number) => {
      return {
        ...previousValue,
        [currentValue]: { label: voicing[currentIndex] },
      } as Partial<ActiveKeys>;
    },
    {}
  );
  return activeKeys;
};
