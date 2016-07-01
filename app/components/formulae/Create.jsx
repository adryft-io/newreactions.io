import React, { PropTypes } from 'react';

const Create = ({
  selectedAction,
  actions,
  selectedReaction,
  reactions,
  onSelectAction,
  onSelectReaction,
  onClickConfigure,
}) => (
  <div>
    <h3>Choose an action ({selectedAction && selectedAction.name})</h3>
    {actions.map((action, index) => (
      <div key={index} onClick={() => { onSelectAction(action); }}>
        <h3>{action.channel}</h3>
        <p className="small-paragraph">{action.name}</p>
        <span className="divider" />
      </div>
    ))}

    <h3>Choose a reaction ({selectedReaction && selectedReaction.name})</h3>
    {reactions.map((reaction, index) => (
      <div key={index} onClick={() => { onSelectReaction(reaction); }}>
        <h3>{reaction.channel}</h3>
        <p className="small-paragraph">{reaction.name}</p>
        <span className="divider" />
      </div>
    ))}

    {selectedAction && selectedReaction ? null :
      <p>please choose both an action <em>and</em> a reaction</p>
    }

    {selectedAction && selectedReaction ?
      <a className="button" onClick={onClickConfigure}>configure your formula</a> :
      <span className="button">configure your formula</span>
    }
  </div>
);

Create.propTypes = {
  selectedAction: PropTypes.object,
  actions: PropTypes.array.isRequired,
  selectedReaction: PropTypes.object,
  reactions: PropTypes.array.isRequired,
  onSelectAction: PropTypes.func.isRequired,
  onSelectReaction: PropTypes.func.isRequired,
  onClickConfigure: PropTypes.func.isRequired,
};

export default Create;
