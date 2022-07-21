import { createAction, props } from '@ngrx/store/';
import { Beer } from '../model/model';

export const deleteBeerAction = createAction(
  '[beer] deleteBeer',
  props<{ id: number }>()
);

export const addBeerAction = createAction(
  '[beer] addBeer',
  props<{ beer: Beer }>()
);
