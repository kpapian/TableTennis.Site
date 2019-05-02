import { SpaEquipment } from '../../equipment/spa-equipment.model';
import { CartActionTypes, CartActions } from './cart.actions';

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
        // case CartActionTypes.DeleteItemActionType:
        //     return {
        //         ...state,
        //         items: [...state.items, action]
        //     };
        default:
            return state;
    }
}
