import { SpaEquipment } from '../../equipment/spa-equipment.model';
import { CartActionTypes, CartActions } from './cart.actions';
import { stat } from 'fs';

export interface CartState {
    items: SpaEquipment[];
}

const initialCartState: CartState = {
    items: []
};

export function cartReducer(state = initialCartState, action: CartActions): CartState {
    switch (action.type) {
        case CartActionTypes.AddItemActionType:
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        case CartActionTypes.DeleteItemActionType:
            const cartItems = [...state.items];
            cartItems.slice(action.payload, 1);
            return {
                ...state,
                items: cartItems
            };
        default:
            return state;
    }
}
