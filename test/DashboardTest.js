import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import Dashboard from '../app//components/Dashboard.jsx';
/* global describe it */

describe('A suite', () => {
  it('contains spec with an expectation', () => {
    expect(shallow(<Dashboard />).contains(<div className="col-4" />)).to.equal(true);
  });

  it('contains spec with an expectation', () => {
    expect(shallow(<Dashboard />).is('.col-4')).to.equal(true);
  });

  it('contains spec with an expectation', () => {
    expect(mount(<Dashboard />).find('.col-4').length).to.equal(1);
  });
});
