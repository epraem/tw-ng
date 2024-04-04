import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { CenteredComponent } from '../../layouts/centered/centered.component';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CardComponent, CenteredComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
})
export class CardsComponent {}
