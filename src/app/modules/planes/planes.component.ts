import { Component, OnInit } from '@angular/core';
import { Plan } from '../../classes/plan';
import { PlanesService } from '../../services/planes.service';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrl: './planes.component.css'
})
export class PlanesComponent implements OnInit{

  planes:any;

  constructor(private planService:PlanesService){
    
  }

  

  ngOnInit(): void {
    this.obtenerPlanes();

  }

  private obtenerPlanes(){
    this.planService.obtenerListaPlanes().subscribe( (dato) => {
      this.planes = dato;
    });
  }

 
}
