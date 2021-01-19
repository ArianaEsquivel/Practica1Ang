import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../../../Clases/persona';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  @Input() persona : Persona
  
  constructor() { }
  ngOnInit(): void {
  }

}
