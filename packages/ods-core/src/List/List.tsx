import styled, { css } from "styled-components";
import React from "react";
import { OptionalTrackableProps } from "@origin-digital/ods-types/";
import { style, get } from "styled-system";
import { cssLengthToString } from "@origin-digital/ods-helpers";
import { Stack, StackProps } from "../Stack/Stack";
import { CounterContainer, CounterLabel, Counter } from "../ListItem/ListItem";
import {
  TextContextProvider,
  UseTextProps,
  TextProps,
  useTextStylesFromContext,
} from "../Text";

type ULType = "disc" | "circle";
type OLType =
  | "decimal"
  | "lower-alpha"
  | "upper-alpha"
  | "lower-roman"
  | "upper-roman"
  | "decimal-stylised";

const textContextDefaultProps = {
  variant: "body",
  tone: "neutral",
  weight: "regular",
} as const;

const listInnerDefaultProps: Pick<ListProps, "space" | "type" | "data-id"> = {
  space: ["small", "medium"],
  type: "disc",
  "data-id": "list",
};

export interface ListProps extends OptionalTrackableProps {
  children: StackProps["children"];
  variant?: Exclude<TextProps["variant"], "caption" | "overline-text">;
  space?: StackProps["space"];
  tone?: TextProps["tone"];
  weight?: TextProps["weight"];
  type?: ULType | OLType;
}

const marginBlockStart = style({
  prop: "space",
  cssProperty: "margin-block-start",
  key: "space",
  transformValue: (n, scale) => cssLengthToString(get(scale, n)),
});

const getCounterStyles = ({
  type,
  variant,
  theme,
}: Pick<ListProps, "type" | "variant"> & { theme: any }) => {
  const isSmall = variant === "body-small" || variant === "subtitle-small";
  if (type === "decimal-stylised") {
    return css`
      border-radius: 50%;
      background: ${theme?.colors?.grey500};
      display: flex;
      align-items: center;
      justify-content: center;
      width: ${isSmall ? "20" : "24"}px;
      height: ${isSmall ? "20" : "24"}px;
    `;
  } else if (type === "disc" || type === "circle") {
    return css`
      width: ${isSmall ? "16" : "18"}px;
      height: ${isSmall ? "20" : "24"}px;
      justify-content: flex-end;
    `;
  } else {
    return css`
      width: ${isSmall ? "18" : "20"}px;
      height: ${isSmall ? "20" : "24"}px;
      justify-content: flex-end;
    `;
  }
};

const StylisedList = styled(Stack)<{
  type: ListProps["type"];
  space: StackProps["space"];
  variant: ListProps["variant"];
}>`
  &&& {
    margin-block-start: 0px;
    margin-block-end: 0px;
    ul {
      ${(p) => marginBlockStart(p)}
    }
    ol {
      ${(p) => marginBlockStart(p)}
    }
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;
    list-style: none;
    counter-reset: listCounter;
    li ${CounterContainer} {
      min-width: ${(p) =>
        p.variant === "body-small" || p.variant === "subtitle-small"
          ? "28"
          : "32"}px;
      height: ${(p) =>
        p.variant === "body-small" || p.variant === "subtitle-small"
          ? "20"
          : "24"}px;
      display: flex;
      counter-increment: listCounter;
      align-items: flex-end;
      ${Counter} {
      border-radius: 0;
      background: none;
      display: flex;
      align-items: flex-start;
        ${(p) =>
          getCounterStyles({
            type: p.type,
            variant: p.variant,
            theme: p.theme,
          })}
        ${CounterLabel} {
          color: inherit;
          ${(p) =>
            p.type === "decimal-stylised"
              ? css`
                  color: ${p.theme.colors.white};
                  line-height: 24px;
                  font-size: 14px;
                `
              : ""}
        }
      }
      ${CounterLabel} {
        &::before {
          content: counter(
              listCounter,
              ${(p) => (p.type === "decimal-stylised" ? "decimal" : p.type)}
            )
            "${(p) =>
              p.type === "disc" ||
              p.type === "circle" ||
              p.type === "decimal-stylised"
                ? ""
                : "."}";
        }
      }
    }
  }
`;

type ListInnerProps = Omit<ListProps, keyof UseTextProps>;

const ListInner = ({
  children,
  space = listInnerDefaultProps.space,
  type = listInnerDefaultProps.type,
  "data-id": dataId,
}: ListInnerProps) => {
  const { className, variant } = useTextStylesFromContext();

  const component = type === "circle" || type === "disc" ? "ul" : "ol";

  return (
    <StylisedList
      className={className}
      component={component}
      data-id={dataId}
      space={space}
      variant={variant as ListProps["variant"]}
      type={type}
    >
      {children}
    </StylisedList>
  );
};

export const List = ({ variant, tone, weight, ...others }: ListProps) => {
  return (
    <TextContextProvider
      tone={tone}
      variant={variant}
      weight={weight}
      defaults={textContextDefaultProps}
    >
      <ListInner {...others} />
    </TextContextProvider>
  );
};

List.defaultProps = listInnerDefaultProps;
List.displayName = "List";
