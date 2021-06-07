import { Config } from './type';

export const healthRiskConf: Config = {
    "Malnutrition risk" : {
        start: 0, end: 18.4
    },
    "Low risk" : {
        start: 18.5, end: 24.9
    },
    "Enhanced risk" : {
        start: 25, end: 29.9
    },
    "Medium risk" : {
        start: 30, end: 34.9
    },
    "High risk" : {
        start: 35, end: 39.9
    },
    "Very high risk" : {
        start: 40, end: undefined
    },
};
