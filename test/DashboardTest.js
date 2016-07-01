import { assert } from 'chai';
import Dashboard from '../app/components/dashboard/Dashboard.jsx';
/* global describe it */

describe('Dashboard', () => {
  it('should have proptypes', () => {
    assert.typeOf(Dashboard.propTypes, 'object');
  });
});
