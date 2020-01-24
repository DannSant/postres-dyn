import { Product } from './products.model';
import { productsActions, SET_PRODUCTS } from './products.actions';

export interface ProductsState {
    items: Product[]
}

const initstate: ProductsState = {
    items: []
}

export function productsReducer(state = initstate, action: productsActions): ProductsState {
    switch(action.type){
        case SET_PRODUCTS:
            return {items:[
                ...action.items.map(item =>{
                    return {...item};
                })
            ]}
        default:
            return state;
    }
}