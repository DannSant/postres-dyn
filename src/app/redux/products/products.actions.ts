import { Action } from '@ngrx/store';
import { Product } from './products.model';

export const SET_PRODUCTS = "PRODUCTS_SET_PRODUCTS";

export class SetProductsAction implements Action {
    readonly type = SET_PRODUCTS;
    constructor(public items:Product[]){}
}

export type productsActions = SetProductsAction;
