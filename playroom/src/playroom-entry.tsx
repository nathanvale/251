/* eslint-disable react/display-name */
import React from 'react';
import {OriginThemeProvider} from '@origin-digital/ods-core';
import {injectGlobal} from 'styled-components';

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
        src: url(https://origin-fonts.s3-ap-southeast-2.amazonaws.com/Origin_Gordita-Light.woff2)
          format('woff');
        font-weight: 200;
        font-style: normal;
      }

      @font-face {
        font-family: 'gordita';
        src: url(https://origin-fonts.s3-ap-southeast-2.amazonaws.com/Origin_Gordita-Regular.woff2)
          format('woff');
        font-weight: 500;
        font-style: normal;
      }

      @font-face {
        font-family: 'gordita';
        src: url(https://origin-fonts.s3-ap-southeast-2.amazonaws.com/Origin_Gordita-Medium.woff2)
          format('woff');
        font-weight: 600;
        font-style: normal;
      }

      @font-face {
        font-family: 'gordita';
        src: url(https://origin-fonts.s3-ap-southeast-2.amazonaws.com/Origin_Gordita-Bold.woff2)
          format('woff');
        font-weight: 900;
        font-style: normal;
      }
`;

// eslint-disable-next-line import/no-default-export
export default ({children}: {children: React.ReactChild}) => (
  <OriginThemeProvider>{children}</OriginThemeProvider>
);
