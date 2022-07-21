import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { allBeerTypes, Beer, BeerForm, BeerStyle } from '../../model/model';
import { BeerService } from '../../service/beer.service';

@Component({
  selector: 'app-beer-form',
  templateUrl: './beer-form.component.html',
  styleUrls: ['./beer-form.component.css'],
})
export class BeerFormComponent implements OnInit {
  beerTypes: BeerStyle[] = allBeerTypes;
  beerForm: FormGroup<BeerForm>;

  constructor(private beerService: BeerService) {}

  ngOnInit() {
    this.beerForm = this.initForm();
  }

  private initForm(): FormGroup<BeerForm> {
    return new FormGroup<BeerForm>({
      beerName: new FormControl(null, Validators.required), //il validator mi dice che l'utente non può andare avanti senza questo campo
      beerStyle: new FormControl(null, Validators.required),
      upc: new FormControl(null, Validators.required),
      price: new FormControl(null, [Validators.required, Validators.min(0)]),
    });
  }
  onSubmit() {
    const beerFromForm = this.beerForm.value;
    const beer: Beer = {
      beerName: beerFromForm.beerName!,
      beerStyle: beerFromForm.beerStyle!,
      upc: beerFromForm.upc!,
      price: beerFromForm.price!,
      createdDate: new Date(),
      lastModifiedDate: new Date(),
      id: this.beerService.generateId(),
    };
    this.beerService.addBeer(beer);
  }
}
