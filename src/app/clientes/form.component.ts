import {Component, OnInit} from '@angular/core';
import {Cliente} from './cliente';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() {
  }

  private cliente: Cliente = new Cliente();
  private titulo = 'Crear Cliente';

  ngOnInit() {
  }

  public create(): void {
    console.log('Clicked!');
    console.log(this.cliente);
  }
}
