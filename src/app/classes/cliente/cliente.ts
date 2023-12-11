import { Direccion } from "../direccion/direccion";
import { Usuario } from "../usuario/usuario";

export class Cliente {

    id:number
    apellidos:string;
    correo_electronico:string;
    nif:string;
    nombre:string;
    telefono:number;
    direccion:Direccion;
    usuario:Usuario;

}
