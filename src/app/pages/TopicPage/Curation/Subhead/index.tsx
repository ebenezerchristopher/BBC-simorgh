import React, { PropsWithChildren, useContext } from 'react';

import H2 from './index.styled';

import { LeftChevron, RightChevron } from '../../icons';

import { ServiceContext } from '../../../../contexts/ServiceContext';

interface Props {
  href?: string;
}

const Subhead = ({ children, href }: PropsWithChildren<Props>) => {
  const { service, script, dir } = useContext(ServiceContext) as {
    script: string;
    service: string;
    dir: string;
  };
  const Wrapper = href
    ? ({ children: innerChildren }) => (
        <a href={href}>
          <span>{innerChildren}</span>
          {dir === 'ltr' ? <RightChevron /> : <LeftChevron />}
        </a>
      )
    : React.Fragment;
  return (
    <H2 service={service} script={script}>
      <Wrapper>{children}</Wrapper>
    </H2>
  );
};

Subhead.defaultProps = { href: '' };

export default Subhead;