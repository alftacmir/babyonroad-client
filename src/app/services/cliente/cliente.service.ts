import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../../classes/cliente/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private baseURL = 'http://localhost:9000/lista_planes';

  constructor(private httpClient: HttpClient) {}

  obtenerListaCliente(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(`${this.baseURL}`+"/todos");
  }

  registrarCliente(cliente: Cliente): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`+"/nuevo", cliente);
  }

  obtenerCliente(id: number): Observable<Cliente>{
    return this.httpClient.get<Cliente>(`${this.baseURL}/${id}`);
  }
}
