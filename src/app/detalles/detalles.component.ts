import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../../../Clases/persona'
@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
  @Input() persona : Persona
  constructor() { }
  ngOnInit(): void {
  }

}
