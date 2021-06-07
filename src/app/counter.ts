import { BehaviorSubject } from 'rxjs';
 
export module Counter {
export class CounterService {
    counter = 0;
    count: BehaviorSubject<number>;
    constructor() {
 
        this.count = new BehaviorSubject(this.counter);
    }
 
    nextCount() {
        this.count.next(++this.counter);
    }
}
}