import { Component, OnInit } from '@angular/core';
import { CanComponentDeactivate } from './can-deactivate.guard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit, CanComponentDeactivate {

  shipping = 100;
  taxes = 10;
  orderPlaced = false;

  constructor(private route: Router) { }

  ngOnInit() {
  }

  canDeactivate(): boolean {
    return this.orderPlaced;
  }

  onPlaceOrder() {
    // add logic to save order
    this.orderPlaced = true;
    // add logic to navigate after success place order to the page with order number
    // this.route.navigate(['/order-info']);
  }
}
