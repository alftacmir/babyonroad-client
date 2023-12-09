import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plan } from '../classes/plan';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PlanesService {
  private baseURL = 'http://localhost:9000/lista_planes';

  constructor(private httpClient: HttpClient) {}

  obtenerListaPlanes(): Observable<Plan[]> {
    return this.httpClient.get<Plan[]>(`${this.baseURL}`+"/todos");
  }

  registrarPlan(plan: Plan): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`+"/nuevo", plan);
  }

  obtenerPlan(id: number): Observable<Plan>{
    return this.httpClient.get<Plan>(`${this.baseURL}/${id}`);
  }

  actualizarPlan(id:number,plan:Plan) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,plan);
  }

  eliminarPlan(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
