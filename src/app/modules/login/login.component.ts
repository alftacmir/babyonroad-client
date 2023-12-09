import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';
import { Usuario } from '../../classes/usuario/usuario';
import { Rol } from '../../classes/rol/rol';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  usuario: Usuario = new Usuario();

  registrado: boolean;

  constructor(private router: Router, private loginService: LoginService) {}

  login() {
      this.loginService.hacerLogin(this.usuario).subscribe({
      next: dato => {
        if(dato == true){
          console.log("Ha entrado el usuario")
        }else{
          console.log("El usuario no existe")
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
