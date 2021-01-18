import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../../../Clases/persona';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  public index : number
  nP = new Persona('Abdeel', 'Flores', 21, 'Femenino');
  nombre : string
  apellidos : string
  edad : number
  sexo : string
  personas : Array<Persona> = [] 
  constructor() { }
  ngOnInit(): void {
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

}
