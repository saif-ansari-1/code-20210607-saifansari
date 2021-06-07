import { calculateBMI } from '../app/utils/util';
import { expect } from 'chai';
import 'mocha';

describe('util', () => {
  it('should calculate bmi value', () => {
    expect(calculateBMI(1, 1)).to.equal(10000);
    expect(calculateBMI(62, 166)).to.equal(22.5);
    expect(calculateBMI(120, 160)).to.equal(46.87);
    expect(calculateBMI(93, 167)).to.equal(33.35);

  });
});