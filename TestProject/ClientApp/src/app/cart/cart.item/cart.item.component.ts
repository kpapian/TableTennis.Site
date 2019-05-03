import { OnInit, Component, EventEmitter, Output, Input } from '@angular/core';
import { SpaEquipment } from '../../equipment/spa-equipment.model';
import { Store } from '@ngrx/store';
import { CartState } from '../store/cart-reducer';

@Component({
    selector: 'app-cart-item',
    templateUrl: './cart.item.component.html',
})
export class CartItemComponent implements OnInit {

    @Output() itemTotalChanged: EventEmitter<number> = new EventEmitter<number>();
    @Output() itemDeleted: EventEmitter<number> = new EventEmitter<number>();
    @Input() cartItem: SpaEquipment;
    isDeleted = false;
    itemTotal: number;

    constructor(private readonly store: Store<CartState>) { }

    ngOnInit() {
        this.calculateItemTotal();
    }

    onDelete() {
        // this.isDeleted = !this.isDeleted;
        this.itemDeleted.emit(this.itemTotal);
        
    }

    // onDelete(cartItem: SpaEquipment) {
    //     this.store.dispatch(new DeleteItemAction(cartItem.id));
    // }

    calculateItemTotal(): void {
        this.itemTotal = this.cartItem.quantity * this.cartItem.price;
        this.itemTotalChanged.emit(this.cartItem.price);
    }
}
