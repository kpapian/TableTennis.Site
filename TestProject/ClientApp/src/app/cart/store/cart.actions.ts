import { Action } from '@ngrx/store';
import { SpaEquipment } from '../../equipment/spa-equipment.model';

export enum CartActionTypes {
    AddItemActionType = '[Equipment] Add item to cart',
    DeleteItemActionType = '[Cart] Delete item from cart',
    CalculateCartTotalActionType = '[Cart] calculate cart total',
}

export class AddItemAction implements Action {
    readonly type = CartActionTypes.AddItemActionType;

    constructor(public payload: SpaEquipment) { }
}

export class DeleteItemAction implements Action {
    readonly type = CartActionTypes.DeleteItemActionType;
    constructor(public payload: number) { }
}

export class CalculateCartTotalAction implements Action {
    readonly type = CartActionTypes.CalculateCartTotalActionType;
    constructor(public payload: number) { }
}

export type CartActions = AddItemAction
| DeleteItemAction
| CalculateCartTotalAction;
