import {
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Beer } from '../../model/model';
import { BeerService } from '../../service/beer.service';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css'],
})

/*
creare un componente che chiamiamo beer che viene richiamato da beer-list per mostrare i dettagli della i-esima birra
*/
export class BeerComponent implements OnInit {
  @Input() beerComponent: Beer; // input ha la funzione di ricevere da beer list l'i-esima birra

  //è necessario iniettare nel costruttore l'istanza del service
  constructor(public beerService: BeerService) {}

  ngOnInit() {}

  onDelete(beer: Beer) {
    this.beerService.deleteBeer(beer);
  }
}
