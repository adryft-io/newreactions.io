import React, { PropTypes } from 'react';
import _ from 'lodash';

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
      <p className="smallError">{errors.name}</p>
    </h3>
    <div className="six columns">
      <h3>{selectedAction && selectedAction.name} Fields</h3>
        {Object.keys(selectedAction.fields).length < 1 ?
          <div>
            <p className="small">There are no fields for this action</p>
          </div> :
          _.map(selectedAction.fields, (field, name) => (
            <div key={name}>
              {field.label}:
              <input
                className={errors[name] ? 'error' : ''}
                onChange={(e) => {
                  handleChange('action', name, field, e.target.value);
                }}
              />
              <p className="smallError">{errors[name]}</p>
            </div>
          ))
        }
    </div>
    <div className="five columns">
      <h3>{selectedReaction && selectedReaction.name} Fields:</h3>
      {Object.keys(selectedReaction.fields).length < 1 ?
        <div>
          <p className="small">There are no fields for this reaction</p>
        </div> :
        _.map(selectedReaction.fields, (field, name) => (
          <div key={name}>
            {field.label}:
            <input
              className={errors[name] ? 'error' : ''}
              onChange={(e) => {
                handleChange('reaction', name, field, e.target.value);
              }}
            />
            <p className="smallError">{errors[name]}</p>
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
