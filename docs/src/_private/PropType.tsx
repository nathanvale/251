import React, {Fragment} from "react";
import {NormalisedPropType} from "@origin-digital/ods-scripts";
import {Box} from "@origin-digital/ods-core";

export interface PropTypeProps {
  type: NormalisedPropType;
}

export const PropType = ({type}: PropTypeProps) => {
  if (typeof type === "string") {
    // Display child component type (e.g. Column | Column[])
    const matches = type.match(/^ReactElement<([A-Z]{1}[a-zA-Z]+)Props/);
    if (matches && matches.length >= 2) {
      return (
        <>
          {matches[1]}
          {/* Support arrays: */ /\[\]$/.test(type) ? "[]" : ""}
        </>
      );
    }

    return <Fragment>{type}</Fragment>;
  }

  if (type.type === "alias") {
    return (
      <Fragment>
        {type.alias}
        {"<"}
        {type.params.map((paramType, index) => (
          <PropType key={index} type={paramType} />
        ))}
        {">"}
      </Fragment>
    );
  }

  if (type.type === "interface") {
    return (
      <Fragment>
        {"{"}
        {Object.values(type.props).map(({propName, required, type}) => (
          <Box key={propName} paddingLeft="small">
            {propName}
            {required ? ": " : "?: "}
            <PropType type={type} />;
          </Box>
        ))}
        {"}"}
      </Fragment>
    );
  }

  return (
    <Fragment>
      {type.types.map((unionType, index) => (
        <Fragment key={index}>
          {index > 0 && " | "}
          <PropType type={unionType} />
        </Fragment>
      ))}
    </Fragment>
  );
};
