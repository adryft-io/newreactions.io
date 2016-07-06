// TODO: make selected action bold and   blue
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
  <div className="space-top nine columns componentContainer row">
    <div className="six columns">
      <h3>Choose an action</h3>
      {actions.map((action, index) => (
        <div key={index}>
          <h4>{action.channel}</h4>
          <p
            onClick={() => { onSelectAction(action); }}
            className={selectedAction === action ? 'element selected' : 'element'}
          >
            {action.name}
          </p>
        </div>
      ))}
    </div>
    <div className="six columns">
      <h3>Choose a reaction</h3>
      <ul>
        {reactions.map((reaction, index) => (
          <div key={index}>
            <li><h4>{reaction.channel}</h4></li>
            <p
              onClick={() => { onSelectReaction(reaction); }}
              className={selectedReaction === reaction ? 'element selected' : 'element'}
            >
              {reaction.name}
            </p>
          </div>
        ))}
      </ul>
    </div>
    <div className="twelve columns">
      {selectedAction && selectedReaction ?
        null :
        <p className="space-top">please choose both an action <em>and</em> a reaction</p>
      }

      {selectedAction && selectedReaction ?
        <a className="configure button space-top" onClick={onClickConfigure}>
          configure your formula
        </a> : <span className="configure button">configure your formula</span>
      }
    </div>
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
