import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';
import { Usuario } from '../../classes/usuario/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  usuario: Usuario = new Usuario();

  idUsuario: string | null ;

  idUsuarioNumber: number;

  registrado: boolean;

  constructor(private router: Router, private loginService: LoginService) {}

  login() {
      this.loginService.hacerLogin(this.usuario).subscribe({
      next: dato => {
        if(dato == 0){
          window.location.reload();
        }else{
          sessionStorage.setItem('usuario', JSON.stringify(dato));
          sessionStorage.setItem('registrado', JSON.stringify(true));
          this.idUsuario = sessionStorage.getItem('usuario');
          if(this.idUsuario != null){
            this.idUsuarioNumber = Number(JSON.parse(this.idUsuario))
            this.loginService.obtenerUsuario(this.idUsuarioNumber).subscribe({
              next: data => {
                this.usuario = data;
                sessionStorage.setItem('rol', JSON.stringify(this.usuario.rol.tipoRol));
              }
              ,
              error: error => console.error(error),
            })
          }
          
          this.irAPerfil();
        }
      },
      error: error => console.log(error)
    });
    
  }

  irAPerfil() {
    this.router.navigate(['/perfil']);
  }

  onSubmit() {
    this.login();
  }
}
