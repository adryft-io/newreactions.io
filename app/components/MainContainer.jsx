import React from 'react';
import Nav from './Nav.jsx';

const MainContainer = (props) => <div className="row">{props.children}</div>;
MainContainer.propTypes = { children: React.PropTypes.object };
export default MainContainer;
