import { Config } from './type';
export const bmiCategoryConf: Config = {
    "Underweight" : {
        start: 0, end: 18.4
    },
    "Normal Weight" : {
        start: 18.5, end: 24.9
    },
    "Overweight" : {
        start: 25, end: 29.9
    },
    "Moderately Obese" : {
        start: 30, end: 34.9
    },
    "Severely Obese" : {
        start: 35, end: 39.9
    },
    "Very severely Obese" : {
        start: 40, end: undefined
    },
};