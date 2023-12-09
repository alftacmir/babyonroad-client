import { Component, OnInit } from '@angular/core';
import { Plan } from '../../../classes/plan';
import { PlanesService } from '../../../services/planes.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-actualizar-plan',
  templateUrl: './actualizar-plan.component.html',
  styleUrl: './actualizar-plan.component.css'
})
export class ActualizarPlanComponent implements OnInit{

  id:number;
  plan:Plan = new Plan();

  constructor(private planService:PlanesService, private router:Router, private route: ActivatedRoute){

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.planService.obtenerPlan(this.id).subscribe({
      next: dato => {
        this.plan = dato;
      },
      error: error => console.log(error)
    });
  }

  volverListaPlanes(){
    this.router.navigate(["/planes"]);
  }

  onSubmit(){
    this.planService.actualizarPlan(this.id,this.plan).subscribe({
      next: dato => {
        this.volverListaPlanes();
      },
      error: error => console.log(error)
    })
  }
}
