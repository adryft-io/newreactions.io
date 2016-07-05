import React, { PropTypes } from 'react';

const Configure = ({
  selectedAction,
  selectedReaction,
  handleName,
  handleChange,
  errors,
  onSave,
}) => (
  <div className="space-top nine columns componentContainer row">
    <h3>
      Name your formula:
      <input
        className={errors.name ? 'error' : ''}
        onChange={(e) => { handleName(e.target.value); }}
      />
    </h3>
    <div className="six columns">
      <h3>{selectedAction && selectedAction.name} Fields</h3>
        {selectedAction.fields.length < 1 ?
          <div>
            <p className="small">There are no fields for this action</p>
          </div> :
          selectedAction.fields.map((field, index) => (
            <div key={index}>
              {field.name}:
              <input
                className={errors[field.name] ? 'error' : ''}
                onChange={(e) => { handleChange('action', field, e.target.value); }}
              />
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
            <p>
              {field.name}:
              <input
                className={errors[field.name] ? 'error' : ''}
                onChange={(e) => { handleChange('reaction', field, e.target.value); }}
              />
            </p>
          </div>
        ))
      }
    </div>
    <div className="twelve columns float-right space-top">
      {Object.keys(errors).length < 1 ?
        null :
        <p className="italic">*please fill out all required fields.</p>
      }

      {Object.keys(errors).length < 1 ?
        <a className="button" onClick={onSave}>save</a> :
        <span className="button">save</span>
      }
    </div>
  </div>
);

Configure.propTypes = {
  selectedAction: PropTypes.object.isRequired,
  selectedReaction: PropTypes.object.isRequired,
  handleName: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default Configure;
