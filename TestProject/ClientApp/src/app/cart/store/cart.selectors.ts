import { createSelector } from '@ngrx/store';
import { AppState } from '../../reducers/index';

export const selectCartState = (state: AppState) => state.cart;
export const curtItemsSelector = createSelector(selectCartState, state => state.items);
export const curtTotalSelector = createSelector(selectCartState, state => state.cartTotal);
