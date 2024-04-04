import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { CenteredComponent } from '../../layouts/centered/centered.component';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [ButtonComponent, CenteredComponent],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss',
})
export class ButtonsComponent {}
