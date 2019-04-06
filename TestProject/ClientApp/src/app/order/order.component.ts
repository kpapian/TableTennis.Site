import { Component, OnInit } from '@angular/core';
import { interval, timer, fromEvent } from 'rxjs';
import { getUrlScheme } from '@angular/compiler';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  // public shouldBeHidden = false;
  // public numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // public changedQuantity = 0;
  total = 0;

  constructor() { }

  ngOnInit() {

    const interval$ = interval(1000);
    // interval$.subscribe(el => console.log('Stream 1' + el));

    // const interval1$ = timer(3000, 1000);
    // const sub = interval1$.subscribe(el => console.log('Stream 1' + el));
    // setTimeout(()=> sub.unsubscribe(), 5000);
    // const click$ = fromEvent(document, 'click');
    // click$.subscribe(event => console.log(event));
  }

  // onQuantityChanged(quantity: number): void {
  //   this.changedQuantity = this.changedQuantity + quantity;
  //   this.shouldBeHidden = this.changedQuantity > 10;
  // }

  onTotalChanged(total: number) {
    this.total = total;
  }
}
