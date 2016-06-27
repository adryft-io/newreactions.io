// Import chai.
const chai = require('chai');

chai.should();

describe('Array', () => {
  describe('#width', () => {
    let rectangle;

    beforeEach(() => {
      rectangle = new Rectangle(10, 20);
    });

    it('returns the width', () => {
      rectangle.width.should.equal(10);
    });
  });
});
