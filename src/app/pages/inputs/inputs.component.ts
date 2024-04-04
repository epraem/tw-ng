import { Component } from '@angular/core';
import { CenteredComponent } from '../../layouts/centered/centered.component';
import { InputComponent } from '../../components/input/input.component';

@Component({
  selector: 'app-inputs',
  standalone: true,
  imports: [InputComponent, CenteredComponent],
  templateUrl: './inputs.component.html',
  styleUrl: './inputs.component.scss',
})
export class InputsComponent {}
