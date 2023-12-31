import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { EsqueletoComponent } from './layout/esqueleto/esqueleto.component';
import { LoginComponent } from './modules/login/login.component';
import { ServiciosComponent } from './modules/servicios/servicios.component';
import { PlanesComponent } from './modules/planes/planes.component';
import { AboutusComponent } from './modules/aboutus/aboutus.component';
import { PerfilComponent } from './modules/perfil/perfil.component';
import { RegisterComponent } from './modules/register/register.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { RegistrarPlanComponent } from './modules/planes/registrar-plan/registrar-plan.component';
import { FormsModule } from '@angular/forms';
import { ActualizarPlanComponent } from './modules/planes/actualizar-plan/actualizar-plan.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EsqueletoComponent,
    LoginComponent,
    ServiciosComponent,
    PlanesComponent,
    AboutusComponent,
    PerfilComponent,
    RegisterComponent,
    RegistrarPlanComponent,
    ActualizarPlanComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
