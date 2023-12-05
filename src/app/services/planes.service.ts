import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plan } from '../classes/plan';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlanesService {
  private baseURL = 'http://localhost:9000/lista_planes/todos';

  constructor(private httpClient: HttpClient) {}

  obtenerListaPlanes(): Observable<Plan[]> {
    return this.httpClient.get<Plan[]>(`${this.baseURL}`);
  }
}
