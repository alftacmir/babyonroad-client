import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rol } from '../../classes/rol/rol';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  constructor(private httpClient: HttpClient) { }

  private baseURL = 'http://localhost:9000/lista_roles';

  obtenerRolCLiente(): Observable<Rol>{
    return this.httpClient.get<Rol>(`${this.baseURL}/rolCliente`);
  }
}
