import { OnInit, Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { SpaEquipment } from '../equipment/spa-equipment.model';
import { Observable, Subscription, Subject } from 'rxjs';
import { CalculateCartTotalAction } from './store/cart.actions';
import { AppState } from '../reducers/index';
import { curtItemsSelector, curtTotalSelector } from './store/cart.selectors';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
    cartStateSubscription!: Subscription;
    cartTotal = 0;
    isCheckoutBtnEnable: boolean;
    cartItemsCount: number;
    cartList: SpaEquipment[];

    constructor(private router: Router,
        private store: Store<AppState>) {
    }

    ngOnInit() {
        this.cartStateSubscription = this.store.pipe(
            select(curtItemsSelector))
            .subscribe(cartItems => {
                this.cartItemsCount = cartItems.length;
                this.cartList = cartItems;
                console.log(cartItems);
            });

        this.store.pipe(select(curtTotalSelector))
            .subscribe((total) => {
                this.cartTotal = total;
            });
    }

    onItemTotalChange(): void {
        this.cartTotal = 0;
        this.cartList.forEach((item) => {
            this.cartTotal = this.cartTotal + item.price * item.quantity;
        });
        this.store.dispatch(new CalculateCartTotalAction(this.cartTotal));
    }

    onItemDeleted(itemTotal: number): void {
        this.cartTotal = this.cartTotal - itemTotal;
    }

    onProceedToCheckout() {
        this.router.navigate(['/checkout']);
    }

    ngOnDestroy() {
        this.cartStateSubscription.unsubscribe();
    }
}
