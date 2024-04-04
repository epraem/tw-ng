import { Routes } from '@angular/router';
import { ButtonsComponent } from './pages/buttons/buttons.component';
import { CardsComponent } from './pages/cards/cards.component';
import { InputsComponent } from './pages/inputs/inputs.component';

export const routes: Routes = [
  { path: 'buttons', component: ButtonsComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'inputs', component: InputsComponent },

  // Add any other routes you might need
  { path: '**', redirectTo: '/buttons' }, // Redirect to the buttons component if no route matches
];
