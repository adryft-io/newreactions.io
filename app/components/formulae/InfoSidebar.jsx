import React, { PropTypes } from 'react';
import { hashHistory } from 'react-router';

const InfoSidebar = ({ title, children, linkLabel, linkPath }) => (
  <div>
    <h3>{title}</h3>
    {children}
    <a className="button" onClick={() => { hashHistory.push(linkPath); }}>{linkLabel}</a>
  </div>
);

InfoSidebar.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
  linkLabel: PropTypes.string.isRequired,
  linkPath: PropTypes.string.isRequired,
};

export default InfoSidebar;
