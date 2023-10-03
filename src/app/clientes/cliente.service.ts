import {Injectable} from '@angular/core';
import {Cliente} from './cliente';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) {
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
    return this.http.post(this.urlEndPoint, cliente, {headers: this.httpHeaders}).pipe(
      map(response => response as Cliente)
    ).pipe(
      tap(response => console.log(response))
    );
  }

  getCliente(id): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.urlEndPoint}/${id}`);
  }

  update(cliente: Cliente): Observable<Cliente> {
    return this.http.put(`${this.urlEndPoint}/${cliente.id}`, cliente, {headers: this.httpHeaders})
      .pipe(
        map(response => response as Cliente)
      );
  }

  delete(id: number): Observable<Cliente> {
    return this.http.delete(`${this.urlEndPoint}/${id}`, {headers: this.httpHeaders}).pipe(
      map(response => response as Cliente)
    );
  }

}
