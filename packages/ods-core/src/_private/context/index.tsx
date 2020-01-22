import React from 'react';
import {GlobalProvider} from './global-context';

const AppProviders: React.FC = ({children}) => {
  return <GlobalProvider>{children}</GlobalProvider>;
};

export {AppProviders};
