import React, { ReactNodeArray, useContext } from "react";
import { kebabCase } from "@origin-digital/ods-helpers";
import { Emphasis } from "../Emphasis/Emphasis";
import { Strong } from "../Strong/Strong";
import { TextContext } from "../Text/TextContext";
import { TextLink } from "../TextLink/TextLink";

export interface MarkdownLiteProps {
  children: string;
}

interface TagMatchConfig {
  tag: string;
  Component?: typeof Emphasis | typeof Strong;
  pattern: RegExp;
  replaceRegex: RegExp;
}

const linkRegex: TagMatchConfig = {
  // Matches: [My inline link description](https://my-inline-link-url.com)
  // Additional Matches: [My link](https://new-tab-link.com){:target="_blank"}
  tag: "a",
  pattern: /\[([^\]]*)\]\(([^)]*)\)(\{:target="(.*?)"\})?/gi,
  replaceRegex: /\[([^\]]*)\]\(([^)]*)\)(\{:target="(.*?)"\})?/,
};

const boldRegex: TagMatchConfig = {
  // Matches: __bold text__ OR **bold text**
  tag: "b",
  Component: Strong,
  pattern: /(\*\*|__)(.*?)\1/gi,
  replaceRegex: /(\*\*|__)(.*?)\1/,
};

const italicRegex: TagMatchConfig = {
  // Matches: _italic text_ OR *italic text*
  tag: "i",
  Component: Emphasis,
  pattern: /(\*|_)(.*?)\1/gi,
  replaceRegex: /(\*|_)(.*?)\1/,
};

const processNonLinkTags = (
  matchedObj: string,
  regex: TagMatchConfig,
  render: ReactNodeArray,
  startIndex: number,
  text: string
) => {
  // @ts-ignore
  const [matchOriginal, _, matchText] = matchedObj.match(regex.replaceRegex);
  const textSection = text.slice(startIndex);
  const newStartIndex = textSection.indexOf(matchOriginal);
  const currentIndex = startIndex + newStartIndex + matchOriginal.length;

  const { Component } = regex;

  render.push(textSection.slice(0, newStartIndex));

  if (matchText.length === 0) {
    render.push(matchedObj);
  } else {
    render.push(
      // @ts-ignore Component will never be undefined at this point
      <Component key={`${Component.displayName}-${startIndex}-${currentIndex}`}>
        {matchText}
      </Component>
    );
  }

  return {
    currentRender: render,
    currentIndex,
  };
};

const processLinkTags = (
  matchedObj: string,
  regex: TagMatchConfig,
  render: ReactNodeArray,
  startIndex: number,
  text: string
) => {
  // @ts-ignore
  const [linkOriginal, linkText, href, _, target] = matchedObj.match(
    regex.replaceRegex
  );

  // incase there are mutiple links which will match we want to start from the start
  // of the currentIndex not 0
  const textSection = text.slice(startIndex);
  const linkStartIndex = textSection.indexOf(linkOriginal);
  const currentIndex = startIndex + linkStartIndex + linkOriginal.length;

  render.push(textSection.slice(0, linkStartIndex));

  render.push(
    <TextLink
      key={`link-${startIndex}`}
      data-id={kebabCase(linkText)}
      href={href}
      target={target}
    >
      {linkText}
    </TextLink>
  );

  return {
    currentRender: render,
    currentIndex,
  };
};

const processEmptyRender = (
  text: string,
  regex: TagMatchConfig,
  render: ReactNodeArray
) => {
  const matchArray = text.match(regex.pattern);
  let startIndex = 0;
  if (matchArray) {
    for (const [index, matchedObj] of matchArray.entries()) {
      const processFunction =
        regex.tag === "a" ? processLinkTags : processNonLinkTags;

      const renderIndexObj = processFunction(
        matchedObj,
        regex,
        render,
        startIndex,
        text
      );

      startIndex = renderIndexObj.currentIndex;
      // If after processing there is any string left, add that back to the original array.
      if (index + 1 === matchArray.length) {
        render.push(text.slice(startIndex, text.length));
      }
    }
  }
};

const processNonEmptyRender = (
  regex: TagMatchConfig,
  render: ReactNodeArray
) => {
  /*
    Since we have already process some elements we need to
    only process the string elements
  */
  const newRender: ReactNodeArray = [];
  render.forEach((renderElement) => {
    if (typeof renderElement === "string") {
      const processedRender: ReactNodeArray = [];
      processEmptyRender(renderElement, regex, processedRender);
      if (processedRender.length) {
        newRender.push(...processedRender);
      } else {
        newRender.push(renderElement);
      }
    } else {
      // the children of our components may still need to be processed
      const element = renderElement as React.ReactElement;
      const cloneProps = React.cloneElement(element).props;
      const cloneChilren = cloneProps.children;

      const childRender: ReactNodeArray = [];
      if (typeof cloneChilren === "string") {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        processRender(cloneChilren, boldRegex, childRender);
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        processRender(cloneChilren, italicRegex, childRender);
      }

      if (childRender.length) {
        newRender.push(React.cloneElement(element, { children: childRender }));
      } else {
        newRender.push(renderElement);
      }
    }
  });
  render.length = 0;
  render.push(...newRender);
};

const processRender = (
  text: string,
  regex: TagMatchConfig,
  render: ReactNodeArray
) => {
  if (render.length) {
    processNonEmptyRender(regex, render);
  } else {
    processEmptyRender(text, regex, render);
  }
};

export const MarkdownLite = React.memo(({ children }: MarkdownLiteProps) => {
  const inText = useContext(TextContext);
  if (!inText) {
    throw new Error(
      "MarkdownLite components must be rendered within a Text component only."
    );
  }

  const render: ReactNodeArray = [];

  processRender(children, linkRegex, render);
  processRender(children, boldRegex, render);
  processRender(children, italicRegex, render);

  return <>{render.length ? render : children}</>;
});

MarkdownLite.displayName = "MarkdownLite";
