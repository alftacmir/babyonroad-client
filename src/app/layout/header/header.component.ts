import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  constructor(private router: Router){}

  comprobar(){
    let login = sessionStorage.getItem('registrado');
    if(login){
      this.irAPerfil();
    }else{
      this.irALogin();
    }
  }

  irAPerfil() {
    this.router.navigate(['/perfil']);
  }

  irALogin() {
    this.router.navigate(['/login']);
  }

}
