import {Component, OnInit} from '@angular/core';
import {Cliente} from './cliente';
import {ClienteService} from './cliente.service';
import {ActivatedRoute, Router} from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private clienteService: ClienteService,
              private router: Router,
              private activatedRouter: ActivatedRoute) {
  }

  private cliente: Cliente = new Cliente();
  private titulo = 'Crear Cliente';
  errores: string [];

  ngOnInit() {
    this.cargarCliente();
  }

  public create(): void {
    this.clienteService.create(this.cliente).subscribe(
      cliente => {
        this.router.navigate(['/clientes']);
        this.msjSuccess(`Cliente ${cliente.nombre} creado con exito!`);
      }, err => {
        this.errores = err.error.error;
        console.log('Codigo error Backend: ', this.errores);
        console.log('status: ', err.status);
      }
    );
  }

  cargarCliente(): void {
    this.activatedRouter.params.subscribe(params => {
      const id = params.id;
      if (id) {
        this.clienteService.getCliente(id).subscribe(
          cliente => this.cliente = cliente
        );
      }
    });
  }

  update(): void {
    this.clienteService.update(this.cliente).subscribe(
      cliente => {
        this.router.navigate(['/clientes']);
        this.msjSuccess(`Cliente ${cliente.nombre} actualizado con exito!`);
      }, error => {
        this.errores = error.error.errores;
        console.log('Codigo error Backend: ', error.error);
        console.log('status: ', error.status);
      }
    );
  }

  msjSuccess(mensaje): void {
    swal.fire({
      position: 'center',
      icon: 'success',
      title: mensaje,
      showConfirmButton: false,
      timer: 1500
    });
  }

}
