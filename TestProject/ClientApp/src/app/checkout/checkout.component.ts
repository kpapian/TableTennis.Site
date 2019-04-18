import { Component, OnInit } from '@angular/core';
import { CanComponentDeactivate } from './can-deactivate.guard.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit, CanComponentDeactivate {

  payments = ['Credit card', 'Debit card'];
  countries = ['USA', 'Canada', 'Ukraine', 'France', 'German'];

  shipping = 100;
  taxes = 10;
  orderPlaced = false;
  checkoutForm: FormGroup;

  constructor(private route: Router) { }

  ngOnInit() {
    this.checkoutForm = new FormGroup({
      'firstName': new FormControl(null, Validators.required),
      'lastName': new FormControl(null, Validators.required),
      'address': new FormControl(null, Validators.required),
      'country': new FormControl(null, Validators.required),
      'zip': new FormControl(null, Validators.required),
      'paymentType': new FormControl(null, Validators.required),
      'cardNumber': new FormControl(null, Validators.required),
      'expirationDate': new FormControl(null, Validators.required),
      'cvv': new FormControl(null, Validators.required),
    });
  }

  canDeactivate(): boolean {
    return this.orderPlaced;
  }

  get form(): any {
    return this.checkoutForm.value;
  }

  onPlaceOrder() {
    // add logic to save order
    this.orderPlaced = true;
    // add logic to navigate after success place order to the page with order number
    // this.route.navigate(['/order-info']);

    console.log(this.checkoutForm);
  }
}
