import { ActionReducerMap,createFeatureSelector,createSelector } from '@ngrx/store';
import * as fromPizzas from './pizzas.reducer';

export interface ProductState  {
    pizzas:fromPizzas.PizzaState
}

export const reducers:ActionReducerMap<ProductState>= {
    pizzas:fromPizzas.reducer
}
export const getProductState= createFeatureSelector<ProductState>('products');
// debugger
export const getPizzaState= createSelector(getProductState,
                            (state:ProductState) => state.pizzas );
export const getAllPizzas= createSelector(getPizzaState, fromPizzas.getPizzas);
export const getPizzasLoaded= createSelector(getPizzaState, fromPizzas.getPizzasLoaded);
export const getPizzasLoading= createSelector(getPizzaState, fromPizzas.getPizzasLoading);