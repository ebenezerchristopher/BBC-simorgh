import React, { useContext } from 'react';
import { string } from 'prop-types';
import { RequestContext } from '#contexts/RequestContext';
import { ServiceContext } from '#contexts/ServiceContext';
import Canonical from './Canonical';

const getLocalMostReadEndpoint = (service, variant) => {
  const localhostURL = 'http://localhost:7080';
  const localServiceURL = `${localhostURL}/${service}`;

  return variant
    ? `${localServiceURL}/most_read/${variant}.json`
    : `${localServiceURL}/most_read.json`;
};

const MostReadContainer = ({ endpoint }) => {
  const { variant } = useContext(RequestContext);
  const { service } = useContext(ServiceContext);

  return (
    <Canonical
      endpoint={endpoint || getLocalMostReadEndpoint(service, variant)}
    />
  );
};

MostReadContainer.defaultProps = {
  endpoint: null,
};

MostReadContainer.propTypes = {
  endpoint: string,
};

export default MostReadContainer;
