import { OnInit, Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { SpaEquipment } from '../equipment/spa-equipment.model';
import { Observable, Subscription } from 'rxjs';
import { CartState } from './store/cart-reducer';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {

    cartItemsState: Observable<{ items: SpaEquipment[] }>;
    cartStateSubscription!: Subscription;
    cartTotal = 0;
    isCheckoutBtnEnable: boolean;
    cartItemsCount: number;
    cartList: SpaEquipment[];

    constructor(private router: Router,
                private store: Store<CartState>) {
    }

    ngOnInit() {
        this.cartItemsState = this.store.select('cartItems');
        this.cartStateSubscription = this.cartItemsState
            .subscribe((cartItems) => {
                this.cartItemsCount = cartItems.items.length;
                this.cartList = cartItems.items;
                console.log(cartItems);
            });
    }

    onItemTotalChange(): void {
        this.cartTotal = 0;
        this.cartList.forEach((item) => {
            this.cartTotal = this.cartTotal + item.price * item.quantity;
        });
    }

    onItemDeleted(itemTotal: number): void {
        this.cartTotal = this.cartTotal - itemTotal;
    }

    // get total(): number {
    //     return this.cartList.reduce((prevTotal, currentValue) => {
    //         return prevTotal + currentValue.price * currentValue.quantity;
    //     }, 0);
    // }

    onProceedToCheckout() {
        this.router.navigate(['/checkout']);
    }

    ngOnDestroy() {
        this.cartStateSubscription.unsubscribe();
    }
}
