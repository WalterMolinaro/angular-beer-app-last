import { Injectable } from '@angular/core';
import { beersData } from '../data/beer-list';
import { Beer } from '../model/model';
import { Store } from '@ngrx/store';
import { beerSelectors } from '../store/selectors';
import { addBeerAction, deleteBeerAction } from '../store/actions';

/*questi service servono semplicemente a fornire all'interno della root della radice il provider  */
@Injectable({ providedIn: 'root' })
export class BeerService {
  beers: Beer[] = beersData;

  constructor(private store: Store) {}
  getBeersList() {
    return this.store.select(beerSelectors);
  }

  deleteBeer(item: Beer) {
    this.store.dispatch(deleteBeerAction({ id: item.id }));
    /* this.beers = this.beers.filter(
      (beer) => beer.id != item.id
    ); /*questa sintassi prende la lista delle birre, cicla su ogni birra e confronta gli id della birra item. Se è diversa, la birra viene filtrata e non restituita. */
  }

  generateId() {
    const maxId = Math.max(...this.beers.map((beer) => beer.id));
    return maxId + 1;
  }

  addBeer(beer: Beer) {
    this.store.dispatch(addBeerAction({ beer: beer }));
    /*this.beers.unshift(beer);*/
  }
}
