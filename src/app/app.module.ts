import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './aboout/about/about.component';
import { TeacherComponent } from './teacher/teacher/teacher.component';
import { VehicleComponent } from './vehicle/vehicle/vehicle.component';
import { ClientComponent } from './client/client/client.component';
import { ContactComponent } from './contact/contact/contact.component';
import { AdmissionComponent } from './admission/admission.component';
import { LandingComponent } from './landing/landing/landing.component';
import { HeaderComponent } from './core/header/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    TeacherComponent,
    VehicleComponent,
    ClientComponent,
    ContactComponent,
    AdmissionComponent,
    LandingComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
