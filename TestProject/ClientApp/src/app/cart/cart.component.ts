import { OnInit, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

    cartList = [
        {
            id: 1,
            name: 'Blade',
            price: 134,
            quantity: 0
        },
        {
            id: 2,
            name: 'T-Shirt',
            price: 160,
            quantity: 0
        },
        {
            id: 3,
            name: 'Table',
            price: 1000,
            quantity: 0
        },
        {
            id: 4,
            name: 'Gift',
            price: 0.01,
            quantity: 1
        }
    ];

    cartTotal = 0;
    isCheckoutBtnEnable: boolean;

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    onItemTotalChange(): void {
        this.cartTotal = 0;
        this.cartList.forEach((item) => {
            this.cartTotal = this.cartTotal + item.price * item.quantity;
        });
    }

    // get total(): number {
    //     return this.cartList.reduce((prevTotal, currentValue) => {
    //         return prevTotal + currentValue.price * currentValue.quantity;
    //     }, 0);
    // }

    onItemDeleted(itemTotal: number): void {
        this.cartTotal = this.cartTotal - itemTotal;
    }

    onProceedToCheckout() {
        this.router.navigate(['/checkout']);
    }

    calculateCartItemCount() {
        this.isCheckoutBtnEnable = this.cartList.length >= 2 ? true : false;
    }
}
