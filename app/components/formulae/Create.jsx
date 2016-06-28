import React, { PropTypes } from 'react';

const Create = ({ actions, reactions }) => (
  <div>
    <h3>Choose an action</h3>
    {actions.map((action, index) => (
      <div key={index}>
        <h3>{action.channel}</h3>
        <p className="small-paragraph">{action.name}</p>
        <span className="divider" />
      </div>
    ))}

    <h3>Choose a reaction</h3>
    {reactions.map((reaction, index) => (
      <div key={index}>
        <h3>{reaction.channel}</h3>
        <p className="small-paragraph">{reaction.name}</p>
        <span className="divider" />
      </div>
    ))}

    <a className="button">configure your formula</a>
  </div>
);

Create.propTypes = {
  actions: PropTypes.array.isRequired,
  reactions: PropTypes.array.isRequired,
};

export default Create;
