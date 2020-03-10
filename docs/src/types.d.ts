import { ReactNode, ComponentType } from "react";

export interface Page {
  title: string;
  Component: ComponentType;
}

export interface AppConfig {
  playroomUrl: string;
  sourceUrlPrefix: string;
  zeplinUrl: string;
}
