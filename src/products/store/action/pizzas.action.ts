import { Action } from '@ngrx/store';
import { Pizza } from '../../models/pizza.model';

const LOAD_PIZZAS = '[Product] Load Pizzas';
const LOAD_PIZZAS_FAIL = '[Product] Load Pizzas Fail';
const LOAD_PIZZAS_SUCESS = '[Product] Load Pizzas Sucess';

export class LoadPizzas_ implements Action {
    readonly type= LOAD_PIZZAS
}
export class LoadPizzasFail implements Action {
    readonly type= LOAD_PIZZAS_FAIL
    constructor(public payload: Pizza[]) {}
}
export class LoadPizzasSucess implements Action {
    readonly type= LOAD_PIZZAS_SUCESS
    constructor(public payload: Pizza[]) { }
}
    // action types
export type pizzasAction= LoadPizzas_|LoadPizzasFail|LoadPizzasSucess