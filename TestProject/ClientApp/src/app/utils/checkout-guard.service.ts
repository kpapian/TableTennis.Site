import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Injectable} from '@angular/core';
import { Store } from '@ngrx/store';
import { CartState } from '../cart/store/cart-reducer';
import { SpaEquipment } from '../equipment/spa-equipment.model';

@Injectable()
export class CheckoutGuard implements CanActivate {

    cartItems: SpaEquipment[];

    constructor(private store: Store<CartState>,
                private route: Router) { }

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        this.store.select('cartItems')
            .subscribe((cartItems) => {
                this.cartItems = cartItems.items;
            });

        if (this.cartItems.length > 0) {
            return true;

        } else {
            this.route.navigate(['/']);
            return false;
        }
    }
}
