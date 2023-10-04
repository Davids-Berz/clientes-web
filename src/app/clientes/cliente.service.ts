import {Injectable} from '@angular/core';
import {Cliente} from './cliente';
import {Observable, throwError} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import Swal from 'sweetalert2';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient,
              private router: Router) {
  }

  private urlEndPoint = 'http://localhost:8080/api/clientes';
  private httpHeaders = new HttpHeaders({'content-Type': 'application/json'});


  getClientes(): Observable<Cliente[]> {
    // return of(CLIENTES);
    // return this.http.get<Cliente[]>(this.urlEndPoint);
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as Cliente[])
    ).pipe(
      tap(response => console.log(response))
    );
  }

  create(cliente: Cliente): Observable<Cliente> {
    return this.http.post(this.urlEndPoint, cliente, {headers: this.httpHeaders})
      .pipe(
        catchError(e => {
          Swal.fire(
            e.error.mensaje,
            e.error.error,
            'error'
          );
          return throwError(e);
        }))
      .pipe(
      map(response => response as Cliente)
    ).pipe(
      tap(response => console.log(response))
    );
  }

  getCliente(id): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.urlEndPoint}/${id}`)
      .pipe(
        catchError(e => {
          console.log(e);
          this.router.navigate(['/clientes']);
          Swal.fire(
            'Error al buscar al cliente',
            e.error.mensaje,
            'error'
          );
          return throwError(e);
        })
      ).pipe(
        map(response => response as Cliente));
  }

  update(cliente: Cliente): Observable<Cliente> {
    return this.http.put(`${this.urlEndPoint}/${cliente.id}`, cliente, {headers: this.httpHeaders})
      .pipe(
        map(response => response as Cliente)
      );
  }

  delete(id: number): Observable<Cliente> {
    return this.http.delete(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders})
      .pipe(
        catchError(e => {
          console.log(e);
          this.router.navigate(['/clientes']);
          Swal.fire(
            'Error al eliminar el cliente',
            e.error.mensaje,
            'error'
          );
          return throwError(e);
        })).pipe(
          map(response => response as Cliente)
        );
  }

}
