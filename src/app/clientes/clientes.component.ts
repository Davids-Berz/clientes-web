import {Component, OnInit} from '@angular/core';
import {Cliente} from './cliente';
import {CLIENTES} from './cliente.json';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor() {
  }

  clientes: Cliente[];

  ngOnInit() {
    this.clientes = CLIENTES;
  }

}
