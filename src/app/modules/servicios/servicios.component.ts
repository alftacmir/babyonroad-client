import { Component } from '@angular/core';
import { ServiciosService } from '../../services/servicios/servicios.service';
import { Servicio } from '../../classes/servicio/servicio';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {
  
  "servicios" : Servicio[];

  constructor(private servicioService:ServiciosService){
    
  }

  

  ngOnInit(): void {
    this.obtenerServicios();
  }

  private obtenerServicios(){
    this.servicioService.obtenerListaServicios().subscribe(dato => {this.servicios = dato});
  }

}
