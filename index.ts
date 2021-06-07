import { calculate } from './src/app/bmi';
import { data } from './src/app/data/load-test-person-data'

const [data$, overWieghtCount$] = calculate(data)
data$.subscribe(info => {
    console.log(info);
});

overWieghtCount$.subscribe(count => {
    console.log(`Total number of overweight people: ${count}`)
});