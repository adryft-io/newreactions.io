import React from 'react';
import _ from 'underscore';


const getUniqueChannels = (data) => _.uniq(_.reduce(data.data, (prev, curr) => {
  prev.push(curr.action_channel);
  return prev;
}, []));

const listChannels = (channels, callback, selectedChannel) =>
  (channels.length ?
    channels.map((channel, index) =>
      (
      <div key={index} onClick={() => { callback(channel); }}>
        <li className={selectedChannel === channel ? 'activelink' : ''}>{channel}</li>
      </div>
    )) :
    <div><li>No Formulae Created</li></div>);

const listFormulae = (formulae, callback, selectedFormula, start, end) =>
  formulae
  .slice(start, end)
  .map((formula, index) => (
    <div key={index} onClick={() => { callback(formula); }}>
      <li className={selectedFormula === formula ? 'activelink' : ''}>
        {formula.name}
      </li>
    </div>
));

const listActions = (actionString) =>
  _.map(actionString, (action, index) => (
    <div key={index}>
      <p>
        {`${index}: ${action}`}
      </p>
    </div>
  )
);

module.exports.getUniqueChannels = getUniqueChannels;
module.exports.listChannels = listChannels;
module.exports.listFormulae = listFormulae;
module.exports.listActions = listActions;
