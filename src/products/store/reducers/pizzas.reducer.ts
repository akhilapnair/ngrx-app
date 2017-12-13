import { Pizza } from '../../models/pizza.model';
import * as fromPizzas from '../action/pizzas.action';
export interface PizzaState {
                                    data: Pizza[],
                                    loaded:boolean,
                                    loading:boolean
                             }

export const initialState: PizzaState = {
                                    data: [  {
                                        "name": "Seaside Surfin'"
                                      }],
                                    loaded:false,
                                    loading:false
                                 };   

export function reducer(state= initialState , action: fromPizzas.pizzasAction): PizzaState {
        switch (action.type) {
            case fromPizzas.LOAD_PIZZAS: {
                return {
                    ...state,loading:true
                };
            }
            case fromPizzas.LOAD_PIZZAS_FAIL: {
                return {
                    ...state,loading:false,loaded:true
                };
            }
            case fromPizzas.LOAD_PIZZAS_SUCESS: {
                return {
                    ...state,loading:false,loaded:false
                };
            }
        }
        return state;

}
export const getPizzasLoading= (state: PizzaState)=> state.loading;
export const getPizzasLoaded= (state: PizzaState)=> state.loaded;
export const getPizzas= (state: PizzaState)=> state.data;