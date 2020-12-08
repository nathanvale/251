import React, { useState } from "react";
import { useTheme } from "@material-ui/core";
import { Button } from "@origin-digital/ods-core";
import { Keyboard } from "../Keyboard/Keyboard";
import { chord, Chord } from "../Keyboard/Chord";
import { KeyboardOptions, ActiveKeys } from "../Keyboard/KeyboardModel";

export interface KeyboardControllerProps {}

export const KeyboardController = () => {
  const theme = useTheme();

  const defaultOptions = {
    range: ["C3", "C6"],
    scaleX: 1.9,
    scaleY: 1.9,
    strokeWidth: 1,
    fontFamily: theme.typography.fontFamily || "",
    rightHandKeysColor: theme.palette.info.light,
    leftHandKeysColor: theme.palette.error.light,
  };
  const [options, setOptions] = useState<Partial<KeyboardOptions>>(
    defaultOptions
  );

  const [lhk, setLeftHandKeys] = useState<ActiveKeys | Chord>(
    chord("Cb", 3, ["P1"])
  );

  const [rhk, setRightHandKeys] = useState<ActiveKeys | Chord>(
    chord("Bb", 3, ["M3", "P5", "M7", "M9"])
  );

  function changeOptions() {
    setOptions({ ...defaultOptions, scaleX: 1 });
  }

  function changeOptions2() {
    setLeftHandKeys(chord("C", 4, ["P1"]));
  }

  function changeOptions3() {
    setRightHandKeys(chord("C", 4, ["M3", "P5", "M7", "M9"]));
  }
  function changeOptions4() {
    setLeftHandKeys(chord("B", 3, ["P1"]));
    setRightHandKeys(chord("B", 3, ["M3", "P5", "M7", "M9"]));
  }

  return (
    <>
      <Keyboard leftHandKeys={lhk} rightHandKeys={rhk} options={options} />
      <Button onClick={changeOptions}>Change</Button>
      <Button onClick={changeOptions2}>Change</Button>
      <Button onClick={changeOptions3}>Change</Button>
      <Button onClick={changeOptions4}>Change</Button>
    </>
  );
};

KeyboardController.displayName = "Keyboard";

KeyboardController.defaultProps = {};
