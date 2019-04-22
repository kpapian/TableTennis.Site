import { Component, OnInit, OnDestroy } from '@angular/core';
import { CanComponentDeactivate } from './can-deactivate.guard.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CustomValidators } from '../utils/custom-validators';
import { CheckoutService } from './checkout.service';
import { SpaOrder } from './spa-order.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit, OnDestroy, CanComponentDeactivate {

  payments = ['Credit card', 'Debit card'];
  countries = ['USA', 'Canada', 'Ukraine', 'France', 'German'];
  shipping = 100;
  taxes = 10;

  hasUnsavedChanges = false;
  isOrderPlaced = false;
  filledOrder: SpaOrder;
  checkoutForm: FormGroup;
  changeCheckoutForm: FormGroup;
  changeCheckoutFormValuesChangesSubscription!: Subscription;
  orderData: SpaOrder;
  orderNumber = 'UNKNWON';

  constructor(private readonly route: Router, private readonly formBuilder: FormBuilder,
              private readonly checkoutService: CheckoutService) { }

  ngOnInit() {
    this.buildForm();

    this.changeCheckoutFormValuesChangesSubscription = this.checkoutForm.valueChanges
      .subscribe(() => this.hasUnsavedChanges = true);
  }

  canDeactivate(): boolean {
    return this.hasUnsavedChanges;
  }

  // TODO Delete this debug method
  get form(): any {
    return this.checkoutForm.value;
  }

  private buildForm() {
    this.checkoutForm = this.formBuilder.group({
      firstName: new FormControl(null, [Validators.required, CustomValidators.whitespacesValidation]),
      lastName: new FormControl(null, [Validators.required, CustomValidators.whitespacesValidation]),
      address: new FormControl(null, [Validators.required, CustomValidators.whitespacesValidation]),
      country: new FormControl(null, [Validators.required, CustomValidators.whitespacesValidation]),
      zip: new FormControl(null, [Validators.required, CustomValidators.whitespacesValidation]),
      paymentType: new FormControl(null, [Validators.required, CustomValidators.whitespacesValidation]),
      cardNumber: new FormControl(null, [Validators.required, CustomValidators.whitespacesValidation]),
      expirationDate: new FormControl(null, [Validators.required, CustomValidators.whitespacesValidation]),
      cvv: new FormControl(null, [Validators.required, CustomValidators.whitespacesValidation]),
    });

  }

  onPlaceOrder() {
    this.filledOrder = this.checkoutForm.value;
    this.checkoutService.createOrder(this.filledOrder)
      .subscribe(
        (customerOrderNumber: string) => {
          this.hasUnsavedChanges = false;
          this.orderNumber = customerOrderNumber;
          this.route.navigate(['/checkout/order', this.orderNumber]);
        },
        err => {
          alert(err.status);
          this.checkoutForm.reset();
        });
  }

  ngOnDestroy() {
    this.changeCheckoutFormValuesChangesSubscription.unsubscribe();
  }
}
