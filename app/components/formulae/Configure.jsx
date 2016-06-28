import React, { PropTypes } from 'react';

const Configure = ({ selectedAction, selectedReaction, onSave }) => (
  <div>
    <h3>Name your formula</h3>
    <input />

    <h3>{selectedAction && selectedAction.name} Fields</h3>
    {selectedAction.fields.length < 1 ?
      <div>
        <p className="small">There are no fields for this action</p>
      </div> :
      selectedAction.fields.map((field, index) => (
        <div key={index}>
          <h3>{field.name}</h3>
          <input />
          <span className="divider" />
        </div>
      ))
    }

    <h3>{selectedReaction && selectedReaction.name} Fields</h3>
    {selectedReaction.fields.length < 1 ?
      <div>
        <p className="small">There are no fields for this reaction</p>
      </div> :
      selectedReaction.fields.map((field, index) => (
        <div key={index}>
          <h3>{field.name}</h3>
          <input />
          <span className="divider" />
        </div>
      ))
    }

    <a className="button" onClick={onSave}>save</a>
  </div>
);

Configure.propTypes = {
  selectedAction: PropTypes.object.isRequired,
  selectedReaction: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default Configure;
