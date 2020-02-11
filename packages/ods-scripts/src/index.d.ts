export interface NormalisedInterface {
  type: "interface";
  props: {
    [propName: string]: {
      propName: string;
      required: boolean;
      type: NormalisedPropType;
    };
  };
}

export type NormalisedPropType =
  | string
  | {type: "union"; types: Array<NormalisedPropType>}
  | {type: "alias"; alias: string; params: Array<NormalisedPropType>}
  | NormalisedInterface;
