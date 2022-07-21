import { Beer } from './model';

export interface AppState {
  //rappresenta lo stato di tutta l'applicazione
  beerState: BeerState;
}

export interface BeerState {
  list: Beer[];
}
