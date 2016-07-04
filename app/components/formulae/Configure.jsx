import React, { PropTypes } from 'react';

const Configure = ({
  selectedAction,
  selectedReaction,
  handleName,
  handleChange,
  valid,
  onSave,
}) => (
  <div className="space-top nine columns componentContainer row">
    <h3>Name your formula: <input onChange={(e) => { handleName(e.target.value); }} /></h3>
  <div className="six columns">
      <h3>{selectedAction && selectedAction.name} Fields</h3>
        {selectedAction.fields.length < 1 ?
          <div>
            <p className="small">There are no fields for this action</p>
          </div> :
          selectedAction.fields.map((field, index) => (
            <div key={index}>
              <h4>{field.name}</h4>
              <input onChange={(e) => { handleChange('action', field.name, e.target.value); }} />
            </div>
          ))
        }
    </div>
    <div className="five columns">
      <h3>{selectedReaction && selectedReaction.name} boo Fields:</h3>
      {selectedReaction.fields.length < 1 ?
        <div>
          <p className="small">There are no fields for this reaction</p>
        </div> :
        selectedReaction.fields.map((field, index) => (
          <div key={index}>
            <p>{field.name}:
              <input onChange={(e) => { handleChange('reaction', field.name, e.target.value); }} />
            </p>
          </div>
        ))
      }
    </div>
    <div className="twelve columns float-right space-top">
    {valid ? null : <p className="italic">*please fill out all required fields.</p>}
    {valid ? <a className="button" onClick={onSave}>save</a> : <span className="button">save</span>}
    </div>
  </div>
);

Configure.propTypes = {
  selectedAction: PropTypes.object.isRequired,
  selectedReaction: PropTypes.object.isRequired,
  handleName: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  valid: PropTypes.bool.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default Configure;
