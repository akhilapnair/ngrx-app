import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import * as PizzaAction from '../action/pizzas.action';
Injectable();
export class PizzaEffects {
  constructor(private action$: Actions) {}

  @Effect() loadPizzas$ = this.action$.ofType(PizzaAction.LOAD_PIZZAS);
}
