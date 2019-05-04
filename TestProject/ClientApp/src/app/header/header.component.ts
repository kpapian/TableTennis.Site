import { Component } from '@angular/core';
import { EquipmentService } from '../equipment/equipment.service';
import { CartState } from '../cart/store/cart-reducer';
import { Store } from '@ngrx/store';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']

})
export class HeaderComponent {
    public isCollapsed = true;
    public itemCount = 0;

    constructor(private equipmentService: EquipmentService,
                private readonly store: Store<CartState>) {
        this.store.select('cartItems')
            .subscribe((cartItems) => {
                this.itemCount = cartItems.items.length;
            });
    }
}
