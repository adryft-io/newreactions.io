import React from 'react';
import Select from './Select.jsx';
import SelectInfoSidebar from './SelectInfoSidebar.jsx';
import { Link } from 'react-router';


class SelectContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      channel: ['gmail', 'wemo', 'twilio'],
      isHovered: 'null',
    };
  }

  render() {
    return (
      <div>
        <h4> new reaction </h4>
        <h3> Here is Action and Reaction </h3>
        <p> Welcome to the internet of things, what would you like to create today? </p>
        <Select />
        <SelectInfoSidebar channel={this.state.channel} isHovered={this.state.isHovered} />
        <h4><Link to="/about"> About Us </Link></h4>
        <h4><Link to="/manifesto"> Manifesto </Link></h4>
      </div>
    );
  }
}

export default SelectContainer;
