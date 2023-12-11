import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../classes/cliente/cliente';
import { PerfilService } from '../../services/perfil/perfil.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit {

  idUsuario: string | null ;

  idUsuarioNumber: number;

  cliente: Cliente = new Cliente();

  constructor(private perfilService: PerfilService, private router:Router ){}  

  ngOnInit(): void {
    this.idUsuario = sessionStorage.getItem('usuario');
    if(this.idUsuario != null){
      this.idUsuarioNumber = Number(JSON.parse(this.idUsuario));
      this.perfilService.obtenerCliente(this.idUsuarioNumber).subscribe({
        next: data => {
          this.cliente = data;
        },
        error: error => console.error(error),
      
      })
    }
  }

  cerrarSesion(){
    sessionStorage.clear();
    this.volverAInicio();
  }

  volverAInicio(){
    this.router.navigate(['']);
  }
    
}