import { OnInit, Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
    selector: 'app-cart-item',
    templateUrl: './cart.item.component.html',
})
export class CartItemComponent implements OnInit {

    @Output() itemTotalChanged: EventEmitter<number> = new EventEmitter<number>();
    @Output() itemDeleted: EventEmitter<number> = new EventEmitter<number>();
    @Input() cartItem: { id: number, name: string, price: number, quantity: number };
    isDeleted = false;
    itemTotal: number;

    ngOnInit() {
        this.calculateItemTotal();
    }

    onDelete() {
        this.isDeleted = !this.isDeleted;
        this.itemDeleted.emit(this.itemTotal);
    }

    calculateItemTotal(): void {
        this.itemTotal = this.cartItem.quantity * this.cartItem.price;
        this.itemTotalChanged.emit(this.cartItem.price);
    }
}
