import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BeerListComponent } from './components/beer-list/beer-list.component';
import { AppRoutingModule } from './app-routing.module';
import { BeerFormComponent } from './components/beer-form/beer-form.component';
import { BeerComponent } from './components/beer/beer.component';
import { StoreModule } from '@ngrx/store';
import { AppState } from './model/state';
import { addReduce, beerReducers, deleteReduce } from './store/reducers';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot<AppState>({ beerState: beerReducers }),
    StoreModule.forRoot<AppState>({ beerState: deleteReduce }),
    StoreModule.forRoot<AppState>({ beerState: addReduce }),
  ], //per dire alla nostra applicazione che vofliamo usare selector e reducer dobbiamo dichiararlo nel model e configurarlo con StoreModule. Dobbiamo poi dichiarare il tipo di stato poi nel generico metodo forRoute
  declarations: [
    AppComponent,
    BeerListComponent,
    BeerFormComponent,
    BeerComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
