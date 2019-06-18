import { Component } from '@angular/core';
import { CartState } from '../cart/store/cart.reducer';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers/index';
import { curtItemsSelector } from '../cart/store/cart.selectors';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']

})
export class HeaderComponent {
    public isCollapsed = true;
    public itemCount = 0;

    constructor(private readonly store: Store<AppState>) {
        this.store.select(curtItemsSelector)
            .subscribe((cartItems) => {
                this.itemCount = cartItems.length;
            });
    }
}
