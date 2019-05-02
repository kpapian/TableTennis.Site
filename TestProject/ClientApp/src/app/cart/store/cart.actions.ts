import { Action } from '@ngrx/store';
import { SpaEquipment } from '../../equipment/spa-equipment.model';

export enum CartActionTypes {
    AddItemActionType = '[Equipment] Add item to cart',
    DeleteItemActionType = '[Cart] Delete item from cart'
}

export class AddItemAction implements Action {
    readonly type = CartActionTypes.AddItemActionType;

    constructor(public payload: SpaEquipment) {}
}

export class DeleteItemAction implements Action {
    readonly type = CartActionTypes.DeleteItemActionType;
    payload: SpaEquipment;
}

export type CartActions = AddItemAction | DeleteItemAction;
