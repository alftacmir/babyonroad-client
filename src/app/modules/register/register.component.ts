import { Component } from '@angular/core';
import { Direccion } from '../../classes/direccion/direccion';
import { Usuario } from '../../classes/usuario/usuario';
import { Cliente } from '../../classes/cliente/cliente';
import { Router } from '@angular/router';
import { DireccionService } from '../../services/direccion/direccion.service';
import { UsuarioService } from '../../services/usuario/usuario.service';
import { ClienteService } from '../../services/cliente/cliente.service';
import { error } from 'console';
import { RolService } from '../../services/rol/rol.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  direccion:Direccion = new Direccion();

  usuario: Usuario = new Usuario();

  cliente: Cliente = new Cliente();

  constructor(private router: Router,private direccionService: DireccionService, private usuarioService: UsuarioService, private clienteService: ClienteService, private rolService: RolService){}

  onSubmit(){
    this.direccion.provincia = "Sevilla";
    this.direccionService.registrarDireccion(this.direccion).subscribe()
    this.direccionService.obtenerUltimaDireccion().subscribe({
      next: data => {
        this.cliente.direccion = data;
      }, error: error => console.log(error)
    })
    this.rolService.obtenerRolCLiente().subscribe({
      next: data => {
        this.usuario.rol = data;

      }, error: error => console.log(error)
    })
    this.cliente.usuario = this.usuario;
    this.usuarioService.registrarUsuario(this.usuario).subscribe({
      next: data => {
        this.volveralLogin();
      }, error: error => console.log(error)
    })
  }

  volveralLogin(){
    this.router.navigate(['/login']);
  }

}
