/** @jsx jsx */
import { useContext } from 'react';
import { jsx } from '@emotion/react';
import styles from './index.styles';
import SectionLabel from '../../../legacy/psammead/psammead-section-label/src';
import { GREY_2 } from '../../ThemeProvider/palette';
import { ServiceContext } from '../../../contexts/ServiceContext';

interface MostReadSectionLabelProps {
  mobileDivider?: boolean;
  backgroundColor?: string;
  href?: string;
  linkText?: string;
  visuallyHidden?: boolean;
  overrideHeadingAs?: string;
  headingAttributes?: { id: string; tabindex: string };
}

const MostReadSectionLabel = ({
  mobileDivider = true,
  backgroundColor = GREY_2,
  href,
  linkText,
  visuallyHidden,
  overrideHeadingAs,
  headingAttributes,
}: MostReadSectionLabelProps) => {
  const {
    service,
    script,
    dir,
    mostRead: { header },
  } = useContext(ServiceContext);
  return (
    <SectionLabel
      css={styles.sectionLabel}
      script={script}
      labelId="Most-Read"
      service={service}
      dir={dir}
      mobileDivider={mobileDivider}
      backgroundColor={backgroundColor}
      href={href}
      linkText={linkText}
      visuallyHidden={visuallyHidden}
      overrideHeadingAs={overrideHeadingAs}
      headingAttributes={headingAttributes}
    >
      {header}
    </SectionLabel>
  );
};

export default MostReadSectionLabel;
