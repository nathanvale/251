import * as React from "react";
import { PaginationButton } from "..";

export interface PaginationHolderProps {
  pages: number;
  page: number;
  handlePage: (value: number) => void;
  "data-id"?: string;
}

export const PaginationHolder = (
  props: PaginationHolderProps,
): React.ReactElement => {
  const comps = Array.from(Array(props.pages)).map(
    (_button, i) =>
      // Funky indexing to present only 4 numbers
      (i + 1 >= props.page - 1 && i + 1 <= props.page + 2) ||
      (i + 1 >= props.pages - 3 && i + 1 <= props.page + 2) ||
      (props.page === 1 && i + 1 === 4 && (
        <PaginationButton
          key={i}
          handleClick={props.handlePage}
          index={i + 1}
          selected={i + 1 === props.page}
        >
          {i + 1}
        </PaginationButton>
      )),
  );
  return <>{comps}</>;
};
