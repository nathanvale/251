type ColourIndex = "PRIMARY" | "SECONDARY" | "TEXT" | "GREY";

type IColours = {
  readonly [index in ColourIndex]: {
    readonly [index: string]: string;
  };
};

export const COLOURS: IColours = {
  PRIMARY: {
    RED_PINK: "#ff373c",
    RED: "#ec0000",
    ORANGE: "#ff8228",
    ORANGE_LIGHT: "#ffb432",
    BLUE: "#d2f0ff",
    GREY: "#505050",
    RED_LIGHT: "#fdebeb",
  },
  SECONDARY: {
    BLUE: "#3f75c6",
    GREEN: "#008906",
    PURPLE: "#c34789",
    GREEN_LIGHT: "#a5bb48",
  },
  TEXT: {
    HEADING: "#232323",
    BODY: "#505050",
  },
  GREY: {
    GREY_4: "#f8f8f8",
    GREY_8: "#f1f1f1",
    GREY_16: "#e3e3e3",
    GREY_48: "#ababab",
    GREY_80: "#737373",
    WHITE: "#ffffff",
    GREY_LIGHT: "#f4f4f4",
  },
};

type NavProperties = Readonly<{
  HEIGHT: string;
  UPPER_WIDTH: string;
  DROPDOWN_MENU: Readonly<{
    LINK_COLOUR: string;
    DROPDOWN: Readonly<{
      SHOW_DELAY_TIME: string;
      HIDE_DELAY_TIME: string;
      ANIMATION_TIME: string;
      WIDTH: string;
    }>;
    WIDTH: string;
    Z_INDEX: string;
  }>;
  MOBILE_ITEM: Readonly<{
    HEIGHT: string;
    EXPANSION_WIDTH: string;
    SVG: Readonly<{
      SIDE_LEN: string;
      SIDE_LEN_LARGE: string;
    }>;
  }>;
}>;

export const NAV: NavProperties = {
  DROPDOWN_MENU: {
    LINK_COLOUR: COLOURS.PRIMARY.GREY,
    DROPDOWN: {
      SHOW_DELAY_TIME: ".1s",
      HIDE_DELAY_TIME: ".2s",
      ANIMATION_TIME: ".2s",
      WIDTH: "1140px",
    },
    WIDTH: "1287px",
    Z_INDEX: "9001",
  },
  HEIGHT: "64px",
  UPPER_WIDTH: "1170px",
  MOBILE_ITEM: {
    HEIGHT: "64px",
    EXPANSION_WIDTH: "64px",
    SVG: {
      SIDE_LEN: "16px",
      SIDE_LEN_LARGE: "24px",
    },
  },
};

type ScreenSizes = "XS" | "SM" | "MD" | "LG";

type BreakPointProperties = Readonly<{
  MIN: { readonly [index in ScreenSizes]: string };
  MAX: { readonly [index in ScreenSizes]: string };
}>;

export const BREAK_POINTS: BreakPointProperties = {
  MIN: {
    XS: "576px",
    SM: "768px",
    MD: "992px",
    LG: "1192px",
  },
  MAX: {
    XS: "575.99px",
    SM: "767.99px",
    MD: "991.99px",
    LG: "1191.99px",
  },
};

interface IZIndex {
  readonly MOBILE_MENU_CONTAINER: number;
  readonly HEADER: number;
}

export const Z_INDEX: IZIndex = {
  MOBILE_MENU_CONTAINER: 1100,
  HEADER: 1000,
};

interface IAnimation {
  ICON: { readonly SPEED: string; readonly SCALE: number };
  CARD: { readonly SPEED: string; readonly SCALE: number };
  CHEVRON: {
    readonly SPEED: string;
    readonly TRANSLATE_MIN: string;
    readonly TRANSLATE_MAX: string;
  };
}

export const ANIMATION: IAnimation = {
  CHEVRON: {
    SPEED: "0.22s",
    TRANSLATE_MIN: "0, 5px",
    TRANSLATE_MAX: "5px, 5px",
  },
  ICON: {
    SCALE: 1.3,
    SPEED: "0.22s",
  },
  CARD: {
    SCALE: 1.16,
    SPEED: "0.22s",
  },
};

type TextProperties = Readonly<{
  HEADING: string;
  BODY: string;
  LINK: Readonly<{
    STATIC: string;
    HOVER: string;
    ACTIVE: string;
  }>;
}>;

export const TEXT: TextProperties = {
  HEADING: "#232323",
  BODY: COLOURS.PRIMARY.GREY,
  LINK: {
    STATIC: COLOURS.GREY.GREY_80,
    HOVER: COLOURS.PRIMARY.RED,
    ACTIVE: "#7b0000",
  },
};
