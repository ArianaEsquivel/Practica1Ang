import { Component } from '@angular/core';
import { Persona } from '../../Clases/persona';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public personaM: Persona
  public mostList : boolean = false
  public mostDet : boolean = false
  nombre : string
  apellidos : string
  edad : number
  sexo : string
  personas : Array<Persona> = [] 
  constructor(){
    this.personas = [
      {
      'nombre' : 'Ariana',
      'apellidos' : 'Esquivel',
      'edad' : 19,
      'sexo' : 'Femenino'
      },
      {
        'nombre' : 'Alex',
        'apellidos' : 'Lozano',
        'edad' : 18,
        'sexo' : 'Masculino'
      },
      {
        'nombre' : 'Jair',
        'apellidos' : 'Martínez',
        'edad' : 19,
        'sexo' : 'Masculino'
      },
      {
        'nombre' : 'Gustavo',
        'apellidos' : 'Torres',
        'edad' : 18,
        'sexo' : 'Masculino'
      },
      {
        'nombre' : 'Humberto',
        'apellidos' : 'Canales',
        'edad' : 20,
        'sexo' : 'Masculino'
      }
      ]
  }
  verLista(): void {
    this.mostList = this.mostList == false ? true : false
  }
  verDetalles(sPersona: Persona) : void {
    this.personaM = sPersona
  }
  ocultarDetalles(): void {
    this.mostDet = this.mostDet == false ? true : false
  }
}

