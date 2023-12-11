import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../../classes/cliente/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  private baseURL = 'http://localhost:9000/lista_clientes';

  constructor(private httpClient:HttpClient) { }

  obtenerCliente(id: number): Observable<Cliente>{
    return this.httpClient.get<Cliente>(`${this.baseURL}/${id}`);
  }
}
