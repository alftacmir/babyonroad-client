import { Injectable } from '@angular/core';
import { Usuario } from '../../classes/usuario/usuario';
import { Rol } from '../../classes/rol/rol';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  private urlUsuarios = 'http://localhost:9000/lista_usuarios';

  obtenerUsuario(id: number): Observable<Usuario>{
    return this.httpClient.get<Usuario>(`${this.urlUsuarios}/${id}`);
  }

  hacerLogin(usuario: Usuario): Observable<Object>{
    return this.httpClient.post(`${this.urlUsuarios}`+"/user", usuario);
  }
}
