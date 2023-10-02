import {Component, OnInit} from '@angular/core';
import {Cliente} from './cliente';
import {ClienteService} from './cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  // Inyeccion de dependencia desde el constructor
  constructor(private clienteService: ClienteService ) {
  }

  clientes: Cliente[];

  ngOnInit() {
    this.clientes = this.clienteService.getClientes();
  }

}
