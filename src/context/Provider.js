import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [ userData, setUserData ] = useState({});

  const providerValue = {
    userData, setUserData
  };

  return (
    <Context.Provider value={providerValue}>
      {children}
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node]).isRequired,
};

export default Provider;
