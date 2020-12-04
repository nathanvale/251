/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState, useRef } from "react";
import { KeyboardModel, KeyboardOptions, ActiveKeys } from "../SVGKeyboard/KeyboardModel";

export interface KeyboardProps {
  leftHandKeys?: ActiveKeys;
  rightHandKeys?: ActiveKeys;
  options?: Partial<KeyboardOptions>;
}

function usePrevious(value: string) {
  const ref = useRef<string>();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

//TODO error handling for out of range keys
export const Keyboard = ({
  rightHandKeys,
  leftHandKeys,
  options = {},
}: KeyboardProps) => {
  const [keyboardModel, setKeyboardModel] = useState<KeyboardModel>(
    new KeyboardModel(options)
  );

  const prevOptions = usePrevious(JSON.stringify(options));
  const prevLeftHandKeys = usePrevious(JSON.stringify(leftHandKeys));
  const prevRightHandKeys = usePrevious(JSON.stringify(rightHandKeys));

  useEffect(() => {
    const optionsChanged = prevOptions !== JSON.stringify(options);
    if (optionsChanged) {
      const km = new KeyboardModel(options);
      setKeyboardModel(km);
      km.playLeftHandKeys(leftHandKeys || {});
      km.playRightHandKeys(rightHandKeys || {});
      console.log("optionsChanged");
    }
    if (prevLeftHandKeys !== JSON.stringify(leftHandKeys) && !optionsChanged) {
      keyboardModel.playLeftHandKeys(leftHandKeys || {});
      console.log("leftHandKeysChanged");
    }
    if (
      prevRightHandKeys !== JSON.stringify(rightHandKeys) &&
      !optionsChanged
    ) {
      keyboardModel.playRightHandKeys(rightHandKeys || {});
      console.log("rightHandKeysChanged");
    }
  }, [
    prevOptions,
    options,
    prevLeftHandKeys,
    leftHandKeys,
    prevRightHandKeys,
    rightHandKeys,
    keyboardModel,
  ]);

  const polygons = keyboardModel.getPolygons();
  const width = keyboardModel.getWidth();
  const height = keyboardModel.getHeight();
  const leftHandActiveKeys = keyboardModel.getLeftHandActiveKeys();
  const rightHandActiveKeys = keyboardModel.getRightHandActiveKeys();

  return (
    <>
      <svg width={width} height={height}>
        <g>
          {polygons &&
            polygons.map(({ polygon }, index) => {
              return [polygon && <polygon {...polygon} key={`p${index}`} />];
            })}
        </g>
        <g>
          {leftHandActiveKeys &&
            leftHandActiveKeys.map(({ polygon, text1, text2 }, index) => {
              return [
                polygon && <polygon {...polygon} key={`lhk${index}`} />,
                text1 && (
                  <text {...text1} key={`lhkt1${index}`}>
                    {text1.value}
                  </text>
                ),
                text2 && (
                  <text {...text2} key={`lhkt2${index}`}>
                    {text2.value}
                  </text>
                ),
              ];
            })}
          {rightHandActiveKeys &&
            rightHandActiveKeys.map(({ polygon, text1, text2 }, index) => {
              return [
                polygon && <polygon {...polygon} key={`rhk${index}`} />,
                text1 && (
                  <text {...text1} key={`rhkt1${index}`}>
                    {text1.value}
                  </text>
                ),
                text2 && (
                  <text {...text2} key={`rhkt2${index}`}>
                    {text2.value}
                  </text>
                ),
              ];
            })}
        </g>
      </svg>
    </>
  );
};

Keyboard.displayName = "Keyboard";

Keyboard.defaultProps = {};
