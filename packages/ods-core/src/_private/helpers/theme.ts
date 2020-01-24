import {css} from 'styled-components';

export const themeChecker = css`
  ${({theme}) => {
    if (
      theme != null &&
      Object.keys(theme).length === 0 &&
      theme.constructor === Object
    )
      throw new Error(
        'Please make sure the root of your application is wrapped with the <OriginThemeProvider/>',
      );
    return '';
  }}
`;
