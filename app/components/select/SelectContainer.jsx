import React from 'react';
import Select from './Select.jsx';
import SelectInfoSidebar from './SelectInfoSidebar.jsx';
import { Link } from 'react-router';
import Sidebar from '../Sidebar.jsx';

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
        <Select
          channel={this.state.channel}
          onMouseLeave={this.onMouseLeave}
          onMouseEnter={this.onMouseEnter}
          isHovered={this.state.isHovered}

        />
      </div>
    );
  }
}

export default SelectContainer;
