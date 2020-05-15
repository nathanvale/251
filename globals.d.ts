/* eslint-disable import/no-unused-modules */

declare const __DEV__: boolean;

declare module "*.json" {
  // eslint-disable-next-line one-var
  const value: any;
  // eslint-disable-next-line import/no-default-export
  export default value;
}
