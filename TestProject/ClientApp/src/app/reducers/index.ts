import {
    ActionReducerMap,
} from '@ngrx/store';
import { CartState, cartReducer } from '../cart/store/cart.reducer';

export interface AppState {
    cart: CartState;
}

export const reducers: ActionReducerMap<any, any> = {
    cart: cartReducer,
};
