import React from 'react';
import _ from 'lodash';


const getUniqueChannels = (data, element) => _.uniq(_.reduce(data.data, (prev, curr) => {
  prev.push(curr[element]);
  return prev;
}, []));

const listChannels = (channels, callback, className, selectedChannel) =>
  (!channels.length ? <div><li>{'please create a formula'}</li></div> :
    channels.map((channel, index) => (
      <div className="channelsDiv" key={index}>
        <li onClick={() => { callback(channel); }}>
          <img
            className={className || `${channel}Channel floating`}
            src={className ? '' : `../../img/icon${channel}.png`}
            alt={className ? '' : channel}
          />
          <p className={selectedChannel === channel ? 'activelink' : className}>
            {className ? channel : ''}
          </p>
        </li>
      </div>
    )));

const listFormulae = (formulae, callback, selectedFormula, start, end) =>
  formulae
  .slice(start, end)
  .map((formula, index) => (
    <div key={index} onClick={() => { callback(formula); }}>
      <li className={selectedFormula === formula ? 'activelink' : 'select-service'}>
        {formula.name}
      </li>
    </div>
));

const listActions = (actionString) =>
  _.map(actionString, (action, index) => (
    <div key={index}>
      <p>{`${index}: ${action}`}</p>
    </div>
  )
);

module.exports.getUniqueChannels = getUniqueChannels;
module.exports.listChannels = listChannels;
module.exports.listFormulae = listFormulae;
module.exports.listActions = listActions;
