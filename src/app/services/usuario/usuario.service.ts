import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../../classes/usuario/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private baseURL = 'http://localhost:9000/lista_usuarios';

  constructor(private httpClient: HttpClient) { }

  obtenerListaUsuarios(): Observable<Usuario[]> {
    return this.httpClient.get<Usuario[]>(`${this.baseURL}`+"/todos");
  }

  registrarUsuario(usuario: Usuario): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`+"/nuevo", usuario);
  }

  obtenerUsuario(id: number): Observable<Usuario>{
    return this.httpClient.get<Usuario>(`${this.baseURL}/${id}`);
  }
}
