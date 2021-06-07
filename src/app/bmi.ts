
import { Observable, of, forkJoin, Subject } from "rxjs";
import { bmiCategoryConf } from './config/bmi-category'
import { healthRiskConf } from './config/health-risk'
import { Counter } from "./counter";
import { calculateBMI } from './utils/util'


const counter = new Counter.CounterService();

export const calculate = (data: any[]): [Observable<any[]>, Observable<number>] => {
    const array: Observable<any>[] = data.map(_ => of(processData(_)));
    return [forkJoin(array), counter.count];
};

const processData = (data: any): any => {
    const bmiValue: number = calculateBMI(data["WeightKg"], data["HeightCm"]);
    return {
        ...data, 
        bmi: bmiValue,
        bmiCategory: getCategory(bmiValue),
        healthRisk: getHealthRisk(bmiValue)
    };
};


const getCategory = (bmi: number): string => {
    const key = Object.keys(bmiCategoryConf).find(category => {
         return bmiCategoryConf[category].start < bmi && (!bmiCategoryConf[category].end || bmiCategoryConf[category].end as number > bmi);
    });
    if (key === "Overweight") counter.nextCount();

    return key ? key : "NA";
}

const getHealthRisk = (bmi: number): string => {
    const key = Object.keys(healthRiskConf).find(risk => {
         return healthRiskConf[risk].start < bmi && (!healthRiskConf[risk].end || healthRiskConf[risk].end as number > bmi);
    });

    return key ? key : "NA";
}