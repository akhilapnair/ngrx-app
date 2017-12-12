import { Pizza } from '../../models/pizza.model';
import * as fromPizzas from '../action/pizzas.action';
export interface PizzaState {
                                    data: Pizza[],
                                    loaded:boolean,
                                    loading:boolean
                             }

export const initialState: PizzaState = {
                                    data: [  {
                                        "name": "Seaside Surfin'",
                                        "toppings": [
                                          {
                                            "id": 6,
                                            "name": "mushroom"
                                          },
                                          {
                                            "id": 7,
                                            "name": "olive"
                                          },
                                          {
                                            "id": 2,
                                            "name": "bacon"
                                          },
                                          {
                                            "id": 3,
                                            "name": "basil"
                                          },
                                          {
                                            "id": 1,
                                            "name": "anchovy"
                                          },
                                          {
                                            "id": 8,
                                            "name": "onion"
                                          },
                                          {
                                            "id": 11,
                                            "name": "sweetcorn"
                                          },
                                          {
                                            "id": 9,
                                            "name": "pepper"
                                          },
                                          {
                                            "id": 5,
                                            "name": "mozzarella"
                                          },
                                          {
                                            "id": 10,
                                            "name": "pepperoni"
                                          },
                                          {
                                            "id": 12,
                                            "name": "tomato"
                                          }
                                        ],
                                        "id": 2
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
export const pizzaLoading= (state: PizzaState)=> state.loading;
export const pizzaLoaded= (state: PizzaState)=> state.loaded;
export const pizzaLoad= (state: PizzaState)=> state.data;