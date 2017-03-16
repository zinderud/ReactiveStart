import { Observable, Observer } from "rxjs";

export function ObservableChose1() {
    let numbers = [22, 3, 4, 5];

    let source = Observable.from(numbers);

    var resoult = source.subscribe(

        p => console.log("gelen" + p),
        error => console.log(error),
        () => console.log("başarılı")
    )
}


export class ObserClas implements Observer<number> {

    next(val: number) {
        console.log("ObserClas" + val)
    };
    error(error: any) { }
    complete() { }

}

export function ObservableChose2() {
    let numbers = [22, 3, 4, 5];

    let source = Observable.from(numbers);

    var resoult = source.subscribe(new ObserClas())
}

export function ObservableChose3() {

    let numbers = [2, 3, 33, 3];
    let source = Observable.create(x => {
        let index = 0;
        let val = () => {
            x.next(numbers[index++]);
            if (index < numbers.length) {
                setTimeout(val, 300);
            } else {
                x.complete();
            }
        }
        val();
    }

    ).map(t=>t*t).filter(d=>d>20);
  source.subscribe(
    value => console.log(`value: ${value}`),
    e => console.log(`error: ${e}`),
    () => console.log("complete")   
);

}


