import { Component } from '@angular/core';
import { Persona } from '../../Clases/persona';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  persona = new Persona('Abdeel', 'Flores', 21, 'Femenino');
  constructor(){
  }
}

