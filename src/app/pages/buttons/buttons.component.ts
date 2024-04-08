import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { CenteredComponent } from '../../layouts/centered/centered.component';
import { DomSanitizer } from '@angular/platform-browser';
import { downArrow, icon2, iconRightBoth, iconLeftBoth } from './svg-icons';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [ButtonComponent, CenteredComponent],
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss'],
})
export class ButtonsComponent {
  constructor(private sanitizer: DomSanitizer) {}

  downArrow = downArrow(this.sanitizer);
  icon2 = icon2(this.sanitizer);
  iconRightBoth = iconRightBoth(this.sanitizer);
  iconLeftBoth = iconLeftBoth(this.sanitizer);
}
