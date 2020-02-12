import React from 'react';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';
import Header from './components/Header';
const App = ({ route }) => {
  return (
    <div>
      <Header />
      <div className="container">
        {renderRoutes(route.routes)}
      </div>
    </div>
  );
};

App.propTypes = {
  route: PropTypes.objectOf(PropTypes.any)
};

App.defaultProps = {
  route: null
};

export default {
  component: App
};
