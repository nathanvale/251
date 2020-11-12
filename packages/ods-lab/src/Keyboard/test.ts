/* eslint-disable no-console */
import { note, chord, /*Interval,*/ Chord as TeoriaChord } from "teoria";

// export function openChord(n) {
//   const note1 = note(n).interval("m7");
//   const note2 = note1.interval("M3");
//   const note3 = note2.interval("m2");
//   const note4 = note3.interval("M3");
//   return [note1, note2, note3, note4];
// }
interface Chord extends TeoriaChord {
  labels: () => Record<string, string>;
}
export function getChord(n: string) {
  const root = note(n); //?
  //const interval = Interval.toCoord("P5");

  const chord1 = chord(root)
    //.transpose(interval)
    .voicing(["P1", "M3", "P5", "M7", "M9"]);

  console.log(chord1.simple());
  console.log(chord1.toString());
  console.log(chord1.voicing());
  console.log(chord1.voicing().toString());
  console.log(chord1.bass().toString());
  console.log(chord1.toString());
  console.log(chord1.root);
  console.log(chord1.notes().toString());
  console.log(chord1.symbol);
  console.log(chord1.intervals);

  const customChord = chord1 as Chord;
  customChord.labels = () => {
    const voicing = chord1.voicing().toString().split(","); //?
    const notes = chord1.notes().toString().split(","); //?
    const labels = notes.reduce((previousValue, currentValue, currentIndex) => {
      return {
        ...previousValue,
        [currentValue.toUpperCase()]: voicing[currentIndex],
      };
    }, {});
    console.log(voicing); //?
    return labels; //?
  };

  customChord.simple = () => {
    const notes = chord1.notes().toString().split(",");
    return notes.map((note) => note.toUpperCase());
  };
  console.log(customChord.labels()); //?

  return customChord; //?
}

console.log(getChord("C3"));
