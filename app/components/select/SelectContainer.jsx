import React from 'react';
import Select from './Select.jsx';

class SelectContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      channel: ['gmail', 'wemo'],
    };
  }

  render() {
    return (
      <div>
        <Select
          channel={this.state.channel}
        />
      </div>
    );
  }
}

export default SelectContainer;
