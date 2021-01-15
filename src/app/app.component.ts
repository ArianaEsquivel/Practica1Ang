import { Component } from '@angular/core';
import { Persona } from '../../Clases/persona';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  persona = new Persona('Ariana', 'Esquivel', 19, 'Masculino');
  constructor(){
    this.persona.setNombre("Abdeel");
    this.persona.setApellidos("Flores");
    this.persona.setEdad(21);
    this.persona.setSexo("Femenino");
  }

}

