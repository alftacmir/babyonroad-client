import { Component, OnInit } from '@angular/core';
import { Plan } from '../../../classes/plan';
import { PlanesService } from '../../../services/planes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-plan',
  templateUrl: './registrar-plan.component.html',
  styleUrl: './registrar-plan.component.css'
})
export class RegistrarPlanComponent implements OnInit{

  plan:Plan = new Plan();

  constructor(private planesServicios: PlanesService, private router: Router){}
  
  ngOnInit(): void {
  }

  guardarPlan(){
    this.planesServicios.registrarPlan(this.plan).subscribe({
      next: dato => {
        console.log(this.plan)
        this.volverListaPlanes();
      },
      error: error => console.log(error)
    });
  }

  volverListaPlanes(){
    this.router.navigate(["/planes"]);
  }

  onSubmit(){
    this.guardarPlan();
  }



   
}
