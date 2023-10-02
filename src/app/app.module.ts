import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {footerComponent} from './footer/footer.component';
import {DirectivaComponent} from './directiva/directiva.component';
import {ClientesComponent} from './clientes/clientes.component';
import {ClienteService} from './clientes/cliente.service';
import {RouterModule, Routes} from '@angular/router';

// Rutas
const routes: Routes = [
  {path: '', redirectTo: '/clientes', pathMatch: 'full'},
  {path: 'directivas', component: DirectivaComponent},
  {path: 'clientes', component: ClientesComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    footerComponent,
    DirectivaComponent,
    ClientesComponent
  ],
  // Se registran los Module
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  // registrar los Service en providers
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
