import { Component } from '@angular/core';
import { Order } from './order';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  // Tu instancies ton objet avec des valeurs initiales
  model: Order = new Order("", 0, new Date(), "");

  constructor() { }


  onSubmit(): void {
    // form submitted
    console.log(this.model);
  }
}
