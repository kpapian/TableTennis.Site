import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, timer, fromEvent, Observable, Observer, Subscription, of, concat, merge, Subject } from 'rxjs';
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


    const subject = new Subject();
    const obs$ = subject.asObservable();

    obs$.subscribe(console.log);

    subject.next(1);
    subject.next(2);
    subject.next(3);
    subject.complete();


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
