import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent {

  constructor() { }

  listaCurso: string [] = ['typescrit', 'Javascript', 'c#', 'Java'];

  habilitar = true;

  setHabilitar(): void {
    this.habilitar = !(this.habilitar === true);
  }

}
