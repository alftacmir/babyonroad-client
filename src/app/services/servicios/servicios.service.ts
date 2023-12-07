import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Servicio } from '../../classes/servicio/servicio';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  private baseURL = 'http://localhost:9000/lista_servicios/todos';


  constructor(private httpClient:HttpClient) { }

  obtenerListaServicios(): Observable<Servicio[]> {
    return this.httpClient.get<Servicio[]>(`${this.baseURL}`);
  }

}
