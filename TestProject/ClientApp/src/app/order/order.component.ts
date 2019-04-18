import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, timer, fromEvent, Observable, Observer, Subscription, of, concat, merge } from 'rxjs';
import { catchError, switchMap, filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit, OnDestroy {
  // public shouldBeHidden = false;
  // public numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // public changedQuantity = 0;
  total = 0;

  numbersObsSubscription!: Subscription;
  customObsSubscription!: Subscription;

  constructor() { }

  ngOnInit() {

    // const interval$ = interval(1000);
    // interval$.subscribe(el => console.log('Stream 1' + el));

    // const interval1$ = timer(3000, 1000);
    // const sub = interval1$.subscribe(el => console.log('Stream 1' + el));
    // setTimeout(()=> sub.unsubscribe(), 5000);
    // const click$ = fromEvent(document, 'click');
    // click$.subscribe(event => console.log(event));

    // const sourse1$ = of(1, 2, 3);
    // const sourse2$ = of(4, 5, 6);
    // const sourse3$ = of(7, 8, 9);

    // const result$ = concat(sourse1$, sourse2$, sourse3$);

    // result$.subscribe(console.log);

    const interval1$ = interval(1000);
    const interval2$ = interval1$.pipe(
      map((val => val * 10))
    );
    const resssult$ = merge(interval1$, interval2$);

    resssult$.subscribe(console.log);




    const http$ = this.createHttpObservables('/api/coaches');

    const coaches$ = http$
      .pipe(
        map(item => item.filter(value => value.lastName === 'Pysar'))
      ).subscribe(
        value => console.log(value)
      );



    const myNumbers = interval(2000);
    // .pipe(
    //   .map()
    // ) // create Observable
    // this.numbersObsSubscription = myNumbers.subscribe(
    //   (item: number) => console.log(item)
    // );

    // const myObservable = Observable.create((observer: Observer<string>) => {
    //   setTimeout(() => {
    //     observer.next('first package');
    //   }, 2000);

    //   setTimeout(() => {
    //     observer.next('second package');
    //   }, 4000);

    //   setTimeout(() => {
    //     observer.error('this does not work');
    //   }, 5000);

    // });

    // this.customObsSubscription = myObservable.subscribe(
    //   (data: string) => { console.log(data); },
    //   (error: string) => { console.log(error); },
    //   () => { console.log('completed'); }
    // );


  }

  onTotalChanged(total: number) {
    this.total = total;
  }

  createHttpObservables(url: string): Observable<any> {

    return Observable.create(observer => {

      fetch(url)
        .then(response => {
          return response.json();
        }).then(body => {
          observer.next(body);
          observer.complete();
        });
    });
  }

  ngOnDestroy() {

    // this.numbersObsSubscription.unsubscribe();
    // this.customObsSubscription.unsubscribe();
  }
}
