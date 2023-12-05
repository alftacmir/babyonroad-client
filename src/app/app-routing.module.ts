import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { ServiciosComponent } from './modules/servicios/servicios.component';
import { PlanesComponent } from './modules/planes/planes.component';
import { AboutusComponent } from './modules/aboutus/aboutus.component';
import { RegisterComponent } from './modules/register/register.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'planes', component: PlanesComponent },
  { path: 'about', component: AboutusComponent },
  { path: 'register', component: RegisterComponent}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
