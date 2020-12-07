import { KeyboardModel, ActiveKeys } from "./KeyboardModel";

describe("Keyboard model tests", () => {
  const k = new KeyboardModel({ range: ["C3", "C6"] });
  const leftHandLabels: ActiveKeys = { B3: { label: "P1" } }; //?
  const rightHandLabels: ActiveKeys = {
    "D#4": { label: "M3" },
    "F#4": { label: "P5" },
    "A#4": { label: "M7" },
    "C#5": { label: "M9" },
  };

  test("should getPolygons", () => {
    expect(k.getPolygons()).toMatchSnapshot();
  });

  test("should get options", () => {
    expect(k.getOptions()).toMatchInlineSnapshot(`
      Object {
        "fontFamily": "helvetica",
        "keyCount": 37,
        "keyOffset": 0,
        "leftHandKeysColor": "red",
        "lowerHeight": 45,
        "lowerWidth": 23.6,
        "offsetX": 0,
        "offsetY": 2,
        "palette": Array [
          "#39383D",
          "#F2F2EF",
        ],
        "range": Array [
          "C3",
          "C6",
        ],
        "rightHandKeysColor": "blue",
        "scaleX": 1,
        "scaleY": 1,
        "stroke": "#39383D",
        "strokeWidth": 1,
        "upperHeight": 100,
        "upperOffset": 0,
        "upperWidth": 0,
      }
    `);
  });

  test("should playLeftHandKeys", () => {
    expect(k.playLeftHandKeys(leftHandLabels).getLeftHandActiveKeys())
      .toMatchInlineSnapshot(`
      Array [
        Object {
          "polygon": Object {
            "points": "152.25000000000003,2 152.25000000000003,102 142.60000000000002,102 142.60000000000002,147 166.20000000000002,147 166.20000000000002,102 166.20000000000002,102 166.20000000000002,2",
            "style": Object {
              "fill": "green",
              "stroke": "",
              "strokeWidth": 0,
            },
          },
          "text1": Object {
            "fill": "#39383D",
            "fontFamily": "helvetica",
            "fontSize": "10px",
            "fontWeight": 600,
            "textAnchor": "middle",
            "value": "B3",
            "x": 154.40000000000003,
            "y": 134.75,
          },
          "text2": Object {
            "fill": "#39383D",
            "fontFamily": "helvetica",
            "fontSize": "12px",
            "fontWeight": 600,
            "textAnchor": "middle",
            "value": "P1",
            "x": 154.40000000000003,
            "y": 141,
          },
        },
      ]
    `);
  });
  test("should playRightHandKeys", () => {
    expect(k.playRightHandKeys(rightHandLabels).getRightHandActiveKeys())
      .toMatchInlineSnapshot(`
      Array [
        Object {
          "polygon": Object {
            "points": "209.25,2 209.25,102 209.25,102 209.25,102 221.95,102 221.95,102 221.95,102 221.95,2",
            "style": Object {
              "fill": "green",
              "stroke": "",
              "strokeWidth": 0,
            },
          },
          "text1": Object {
            "fill": "#F2F2EF",
            "fontFamily": "helvetica",
            "fontSize": "10px",
            "fontWeight": 600,
            "textAnchor": "middle",
            "value": "D#4",
            "x": 215.6,
            "y": 89.75,
          },
          "text2": Object {
            "fill": "#F2F2EF",
            "fontFamily": "helvetica",
            "fontSize": "12px",
            "fontWeight": 600,
            "textAnchor": "middle",
            "value": "M3",
            "x": 215.6,
            "y": 96,
          },
        },
        Object {
          "polygon": Object {
            "points": "250.95,2 250.95,102 250.95,102 250.95,102 263.65,102 263.65,102 263.65,102 263.65,2",
            "style": Object {
              "fill": "green",
              "stroke": "",
              "strokeWidth": 0,
            },
          },
          "text1": Object {
            "fill": "#F2F2EF",
            "fontFamily": "helvetica",
            "fontSize": "10px",
            "fontWeight": 600,
            "textAnchor": "middle",
            "value": "F#4",
            "x": 257.3,
            "y": 89.75,
          },
          "text2": Object {
            "fill": "#F2F2EF",
            "fontFamily": "helvetica",
            "fontSize": "12px",
            "fontWeight": 600,
            "textAnchor": "middle",
            "value": "P5",
            "x": 257.3,
            "y": 96,
          },
        },
        Object {
          "polygon": Object {
            "points": "304.74999999999994,2 304.74999999999994,102 304.74999999999994,102 304.74999999999994,102 317.44999999999993,102 317.44999999999993,102 317.44999999999993,102 317.44999999999993,2",
            "style": Object {
              "fill": "green",
              "stroke": "",
              "strokeWidth": 0,
            },
          },
          "text1": Object {
            "fill": "#F2F2EF",
            "fontFamily": "helvetica",
            "fontSize": "10px",
            "fontWeight": 600,
            "textAnchor": "middle",
            "value": "A#4",
            "x": 311.09999999999997,
            "y": 89.75,
          },
          "text2": Object {
            "fill": "#F2F2EF",
            "fontFamily": "helvetica",
            "fontSize": "12px",
            "fontWeight": 600,
            "textAnchor": "middle",
            "value": "M7",
            "x": 311.09999999999997,
            "y": 96,
          },
        },
        Object {
          "polygon": Object {
            "points": "346.44999999999993,2 346.44999999999993,102 346.44999999999993,102 346.44999999999993,102 359.1499999999999,102 359.1499999999999,102 359.1499999999999,102 359.1499999999999,2",
            "style": Object {
              "fill": "green",
              "stroke": "",
              "strokeWidth": 0,
            },
          },
          "text1": Object {
            "fill": "#F2F2EF",
            "fontFamily": "helvetica",
            "fontSize": "10px",
            "fontWeight": 600,
            "textAnchor": "middle",
            "value": "C#5",
            "x": 352.79999999999995,
            "y": 89.75,
          },
          "text2": Object {
            "fill": "#F2F2EF",
            "fontFamily": "helvetica",
            "fontSize": "12px",
            "fontWeight": 600,
            "textAnchor": "middle",
            "value": "M9",
            "x": 352.79999999999995,
            "y": 96,
          },
        },
      ]
    `);
  });
});
