import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'; 

@Component({
  selector: 'app-toolbar',
  imports: [MatIconModule],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.scss'
})
export class Toolbar {
  readonly caption = input.required<string>();

  readonly icon = input('');
}
