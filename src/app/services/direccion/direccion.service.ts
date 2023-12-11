import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Direccion } from '../../classes/direccion/direccion';

@Injectable({
  providedIn: 'root'
})
export class DireccionService {

  private baseURL = 'http://localhost:9000/lista_direcciones';

  constructor(private httpClient: HttpClient) {}

  obtenerListaDirecciones(): Observable<Direccion[]> {
    return this.httpClient.get<Direccion[]>(`${this.baseURL}`+"/todos");
  }

  registrarDireccion(direccion : Direccion): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`+"/nuevo", direccion);
  }

  obtenerDireccion(id: number): Observable<Direccion>{
    return this.httpClient.get<Direccion>(`${this.baseURL}/${id}`);
  }

  obtenerUltimaDireccion(): Observable<Direccion>{
    return this.httpClient.get<Direccion>(`${this.baseURL}/ultimo`);
  }

}
