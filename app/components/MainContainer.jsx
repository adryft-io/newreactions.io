import React from 'react';
import Nav from './Nav.jsx';

const MainContainer = (props) => <div><Nav />{props.children}</div>;

MainContainer.propTypes = { children: React.PropTypes.object };

export default MainContainer;
