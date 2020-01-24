import {ActionReducerMap} from '@ngrx/store'
import { AuthState, authReducer } from './redux/auth/auth.reducer';
import { ProductsState, productsReducer } from './redux/products/products.reducer';

export interface AppState {
    auth: AuthState,
    products: ProductsState
}

export const appReducers: ActionReducerMap<AppState> = {
    auth: authReducer,
    products: productsReducer
}