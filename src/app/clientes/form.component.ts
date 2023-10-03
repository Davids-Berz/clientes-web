import {Component, OnInit} from '@angular/core';
import {Cliente} from './cliente';
import {ClienteService} from './cliente.service';
import {Router} from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private clienteService: ClienteService,
              private router: Router) {
  }

  private cliente: Cliente = new Cliente();
  private titulo = 'Crear Cliente';

  ngOnInit() {
  }

  public create(): void {
    this.clienteService.create(this.cliente).subscribe(
      response => {
        this.router.navigate(['/clientes']);
        swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Cliente creado con exito',
          showConfirmButton: false,
          timer: 1500
        });
      }
    );
  }
}
