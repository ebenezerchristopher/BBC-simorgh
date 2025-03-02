/** @jsx jsx */
import { PropsWithChildren } from 'react';
import { jsx } from '@emotion/react';
import Grid from '../../../../legacy/psammead/psammead-grid/src';
import { mostReadListGridProps } from '../../utilities/gridProps';
import * as styles from './index.styles';
import { MostReadBaseProps } from '../../types';

const MostReadList = ({
  numberOfItems,
  dir = 'ltr',
  columnLayout = 'multiColumn',
  children,
}: PropsWithChildren<MostReadBaseProps>) => {
  return (
    // @ts-expect-error: Legacy grid expects `children` to be passed as props. However, due to coding best practices, we must nest children between the opening and closing tags
    <Grid
      css={[
        styles[columnLayout],
        styles.gridTemplateRows(numberOfItems),
        columnLayout !== 'oneColumn' &&
          styles.multiColumnGridTemplateRows(numberOfItems),
      ]}
      {...mostReadListGridProps(columnLayout)}
      dir={dir}
      numberOfItems={numberOfItems}
      as="ol"
      role="list"
    >
      {children}
    </Grid>
  );
};

export default MostReadList;
