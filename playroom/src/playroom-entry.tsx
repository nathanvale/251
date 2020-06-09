/* eslint-disable react/display-name */
import React from "react";
import { injectGlobal } from "styled-components";
import { OriginThemeProvider } from "@origin-digital/ods-core";

import gorditaRegular from "./fonts/gordita/gorditaregular-webfont.woff2";
import gorditaMedium from "./fonts/gordita/gorditamedium-webfont.woff2";
import gorditaBold from "./fonts/gordita/gorditabold-webfont.woff2";

// eslint-disable-next-line babel/no-unused-expressions
injectGlobal`
      html {
        background-color: #f1f1f1;
        height:100%;
      }

      body {
        margin: 0;
        font-family: gordita, sans-serif;
        height: 100%;
      }

      body > div {
        height: 100%;
      }

      @font-face {
        font-family: 'gordita';
        src: url(${gorditaRegular})
          format('woff');
        font-weight: 500;
        font-style: normal;
      }

      @font-face {
        font-family: 'gordita';
        src: url(${gorditaMedium})
          format('woff');
        font-weight: 600;
        font-style: normal;
      }

      @font-face {
        font-family: 'gordita';
        src: url(${gorditaBold})
          format('woff');
        font-weight: 700;
        font-style: normal;
      }
`;

// eslint-disable-next-line import/no-default-export
export default ({ children }: { children: React.ReactChild }) => (
  <OriginThemeProvider>{children}</OriginThemeProvider>
);
