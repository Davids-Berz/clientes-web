import {Component, OnInit} from '@angular/core';
import {Cliente} from './cliente';
import {ClienteService} from './cliente.service';
import {Router} from '@angular/router';

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
      respone => this.router.navigate(['/clientes'])
    );
  }
}
