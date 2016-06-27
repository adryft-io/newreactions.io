import React from 'react';
import Nav from './Nav.jsx';

const Container = (props) => <div><Nav />{props.children}</div>;

Container.propTypes = { children: React.PropTypes.object };

export default Container;
