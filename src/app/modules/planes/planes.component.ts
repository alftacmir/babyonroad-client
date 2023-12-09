import { Component, OnInit } from '@angular/core';
import { Plan } from '../../classes/plan';
import { PlanesService } from '../../services/planes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  styleUrl: './planes.component.css',
})
export class PlanesComponent implements OnInit {
  planes: Plan[];

  mostrarBoton:boolean = false;

  constructor(private planesService: PlanesService, private router: Router) {}

  ngOnInit(): void {
    this.obtenerPlanes();
  }

  actualizarPlan(id: number) {
    this.router.navigate(['planes/actualizar', id]);
  }

  private obtenerPlanes() {
    this.planesService.obtenerListaPlanes().subscribe((dato) => {
      this.planes = dato;
    });
  }

  eliminarPlan(id: number) {
    this.planesService.eliminarPlan(id).subscribe((dato) => {
      this.obtenerPlanes();
    });
  }
}
