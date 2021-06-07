import { calculate } from '../app/bmi';
import { expect } from 'chai';
import 'mocha';
import { data } from '../app/data/person-data'

describe('BMI Calculator', () => {
  it('should return data with appended info and over weight count', () => {
    const [data$, overWieghtCount$] = calculate(data)
    data$.subscribe(info => {
      console.log(info);
      expect(info.length).to.equal(10);
      info.forEach(person => {
        if (person["bmiCategory"] === "Overweight") {
          expect(person["bmi"]).greaterThan(25);
          expect(person["bmi"]).lessThanOrEqual(29.9)
        }
      });
    });

    overWieghtCount$.subscribe(n => {
      expect(n).to.equal(5);
    });
  });
});