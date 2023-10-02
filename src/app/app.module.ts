import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { footerComponent } from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClientesComponent } from './clientes/clientes.component';
import {ClienteService} from './clientes/cliente.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    footerComponent,
    DirectivaComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule
  ],
  // registrar los Service en providers
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
