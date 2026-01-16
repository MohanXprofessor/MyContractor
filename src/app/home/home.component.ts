import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],

  /* The line `'./home.component.html'` in the code is specifying the relative path to the
  HTML template file for the Angular component. This file contains the markup that
  defines the structure of the component's view. When the component is rendered,
  Angular will use this HTML template to generate the corresponding DOM elements. */
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
