import { createReducer, on } from '@ngrx/store';
import { beersData } from '../data/beer-list';
import { Beer } from '../model/model';
import { BeerState } from '../model/state';
import { BeerService } from '../service/beer.service';
import * as Actions from '../store/actions';

const initialBeerState: BeerState = { list: beersData };
export const beerReducers: any = createReducer(initialBeerState);

export const deleteReduce = createReducer(
  initialBeerState,
  on(Actions.deleteBeerAction, (stateBeers, arg: { id: number }) => ({
    ...stateBeers,
    list: stateBeers.list.filter((beer) => beer.id != arg.id),
  }))
);

export const addReduce = createReducer(
  initialBeerState,
  on(Actions.addBeerAction, (stateBeers, arg: { beer: Beer }) => ({
    ...stateBeers,
    list: pushBeer(stateBeers, arg.beer),
  }))
);

function pushBeer(stateBeers: BeerState, beer: Beer): Beer[] {
  stateBeers.list.push(beer);
  return stateBeers.list;
}
