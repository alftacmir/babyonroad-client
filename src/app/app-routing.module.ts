import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { ServiciosComponent } from './modules/servicios/servicios.component';
import { PlanesComponent } from './modules/planes/planes.component';
import { AboutusComponent } from './modules/aboutus/aboutus.component';
import { RegisterComponent } from './modules/register/register.component';
import { EsqueletoComponent } from './layout/esqueleto/esqueleto.component';
import { RegistrarPlanComponent } from './modules/planes/registrar-plan/registrar-plan.component';
import { ActualizarPlanComponent } from './modules/planes/actualizar-plan/actualizar-plan.component';
import { PerfilComponent } from './modules/perfil/perfil.component';

const routes: Routes = [
  { path: '', component: EsqueletoComponent},
  { path: 'login', component: LoginComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'planes', component: PlanesComponent },
  { path: 'planes/nuevo', component: RegistrarPlanComponent},
  { path: 'planes/actualizar/:id', component: ActualizarPlanComponent},
  { path: 'about', component: AboutusComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'perfil', component: PerfilComponent}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
