/*legge le birre*/
import { createSelector } from '@ngrx/store';
import { BeerState, AppState } from '../model/state';

//mi richiede le funzioni di proiezione e ricevono in input tutto lo stato di tutta l'applicazione e me ne restituiscono una parte

const beerStateFunction = (state: AppState) => state.beerState;
export const beerSelectors = createSelector(
  beerStateFunction,
  (beerState: BeerState) => beerState.list //così ho creato il selector per leggere la lista che ho memorizzato nel mio AppState.

  //Ora andiamo a modificare il metodo getBeerList, nel service.
);
