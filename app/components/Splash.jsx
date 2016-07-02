import React, { PropTypes } from 'react';

const Splash = (props) => (
  <div className="eight columns">
    <h1>{props.title}<span className="cursor">_</span></h1>
    <h2>{props.subtitle}</h2>
  </div>
);

Splash.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Splash;
