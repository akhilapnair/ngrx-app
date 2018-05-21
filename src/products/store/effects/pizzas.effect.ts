import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import * as PizzaAction from '../action/pizzas.action';
import { of } from 'rxjs/observable/of';
import { switchMap, map, catchError } from 'rxjs/operators';
import * as fromServices from '../../services';
@Injectable()
export class PizzaEffects {
  constructor(
    private action$: Actions,
    private pizzaServices: fromServices.PizzasService
  ) {}

  @Effect()
  loadPizzas$ = this.action$.ofType(PizzaAction.LOAD_PIZZAS).pipe(
    switchMap(() => {
      return this.pizzaServices
        .getPizzas()
        .pipe(
          map(pizzas => new PizzaAction.LoadPizzasSucess(pizzas)),
          catchError(error => of(new PizzaAction.LoadPizzasFail(error)))
        );
    })
  );
}
