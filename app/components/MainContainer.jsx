import React from 'react';
import Nav from './Nav.jsx';

const MainContainer = (props) => (
  <div>
    <div className="logo">new reactions</div>
    <div>
    {props.children}
    </div>
  
  </div>

);
MainContainer.propTypes = { children: React.PropTypes.object };
export default MainContainer;
