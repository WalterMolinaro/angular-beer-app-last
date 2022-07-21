/*Modulo di nostro interesse*/
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { BeerFormComponent } from './components/beer-form/beer-form.component';
import { BeerListComponent } from './components/beer-list/beer-list.component';

//Creo array di rotte per la navigazione delle pagine, e dentro l'array i path li passo tutti come oggetti
const routes: Route[] = [
  {
    path: '',
    redirectTo: '/list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    component: BeerListComponent,
  },
  {
    path: 'add',
    component: BeerFormComponent,
  },
];
/*abbiamo definito due rotte: list e add, quando c'è /list renidirizzo il componente beerListComponent, nel caso dell'/add devo registrare il componente definito nel campo component In questo caso è lo stesso. Il pathmatch nel primo caso significa semplicemente che la stringa deve essere totale. Non è necessaria solamente il prefix, cioè se inizia allo stesso modo.  */

@NgModule({
  /*questo imports ci consente tramite il metodo for route di mappare tutta l'applicazione, passando un array di routes */
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
