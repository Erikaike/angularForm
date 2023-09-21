import { Component } from '@angular/core';
import { OrderSU } from './order';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  model: OrderSU = new OrderSU("","","","");

  constructor() { }

  onSubmitSU():void {
    console.log(this.model);
  }
}
