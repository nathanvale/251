import React, {ReactElement, createContext, useMemo} from 'react';
import {ColumnProps} from './column';
import {BoxDebug} from './box-debug';
import {setBreakpoint} from './_private/helpers/utils';
import {ResponsiveSpace} from './box';
import {mapSpaceAliasToIndex} from './_private/helpers/spacing';

interface ColumnsContextValue {
  collapseBelow?: ColumnsProps['collapseBelow'];
  space?: ColumnsProps['space'];
}

const defaultSpace = 'none';

export const ColumnsContext = createContext<ColumnsContextValue>({
  collapseBelow: undefined,
  space: defaultSpace,
});

export interface ColumnsProps {
  'data-id'?: string;
  children: ReactElement<ColumnProps>[] | ReactElement<ColumnProps>;
  collapseBelow?: 'sm' | 'md' | 'lg' | 'xl';
  space?: ResponsiveSpace;
}

export const Columns = ({
  children,
  collapseBelow,
  space = defaultSpace,
  'data-id': dataId,
}: ColumnsProps) => {
  // Prevent re-renders when context values haven't changed
  const columnsContextValue = useMemo(() => ({collapseBelow, space}), [
    collapseBelow,
    space,
  ]);
  const spaceIndex = mapSpaceAliasToIndex(space, true);
  return (
    <BoxDebug
      data-id={dataId}
      display="flex"
      flexDirection={
        collapseBelow && setBreakpoint(collapseBelow, 'column', 'row')
      }
      marginLeft={
        (collapseBelow
          ? setBreakpoint(collapseBelow, 'none', spaceIndex)
          : spaceIndex) as TS_FIXME
      }
    >
      <ColumnsContext.Provider value={columnsContextValue}>
        {children}
      </ColumnsContext.Provider>
    </BoxDebug>
  );
};

Columns.defaultProps = {
  'data-id': 'columns',
  space: 'none',
};

Columns.displayName = 'Columns';
