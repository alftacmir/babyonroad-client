import { Component, OnInit } from '@angular/core';
import { Plan } from '../../classes/plan';
import { PlanesService } from '../../services/planes.service';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrl: './planes.component.css'
})
export class PlanesComponent implements OnInit{

  public "planes":Plan[];

  constructor(private planesService:PlanesService){
    
  }

  

  ngOnInit(): void {
    this.obtenerPlanes();
  }

  private obtenerPlanes(){
    this.planesService.obtenerListaPlanes().subscribe(dato => {this.planes = dato});
  }

 
}
