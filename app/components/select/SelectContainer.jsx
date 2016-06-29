import React from 'react';
import Select from './Select.jsx';
import SelectInfoSidebar from './SelectInfoSidebar.jsx';
import { Link } from 'react-router';


class SelectContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      channel: ['gmail', 'wemo', 'twilio'],
      isHovered: '',
    };
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }

  onMouseEnter(value) {
    this.setState({ isHovered: value });
  }

  onMouseLeave() {
    this.setState({ isHovered: '' });
  }


  render() {
    return (
      <div>
        <h4> new reaction </h4>
        <h3> Here is Action and Reaction </h3>
        <p> Welcome to the internet of things, what would you like to create today? </p>
        <Select
          channel={this.state.channel}
          onMouseLeave={this.onMouseLeave}
          onMouseEnter={this.onMouseEnter}
          isHovered={this.state.isHovered}

        />
        <SelectInfoSidebar
          channel={this.state.channel}
          isHovered={this.state.isHovered}
        />
        <h4><Link to="/about"> About Us </Link></h4>
        <h4><Link to="/manifesto"> Manifesto </Link></h4>
      </div>
    );
  }
}

export default SelectContainer;
