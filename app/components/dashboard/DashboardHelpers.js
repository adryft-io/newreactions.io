import React from 'react';
import _ from 'underscore';


const getUniqueChannels = (data) => _.uniq(_.reduce(data.data, (prev, curr) => {
  prev.push(curr.trigger_channel);
  return prev;
}, []));

const listChannels = (channels, callback, selectedChannel) => channels.map((channel, index) => (
  <div key={index} onClick={() => { callback(channel); }}>
    <li className={selectedChannel === channel ? 'activelink' : ''}>{channel}</li>
  </div>
));

const listFormulae = (formulae, callback, start, end, selectedFormula) =>
  formulae
  .slice(start, end)
  .map((formula, index) => (
    <div key={index} onClick={() => { callback(formula); }}>
      <li className={selectedFormula === formula.trigger_name ? 'activelink' : ''}>
        {formula.trigger_name}
      </li>
    </div>
));

module.exports.getUniqueChannels = getUniqueChannels;
module.exports.listChannels = listChannels;
module.exports.listFormulae = listFormulae;
