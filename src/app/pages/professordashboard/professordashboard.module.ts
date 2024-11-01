import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProfessordashboardPageRoutingModule } from './professordashboard-routing.module';
import { ProfessordashboardPage } from './professordashboard.page';
import { AppointmentService } from '../services/appointment.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfessordashboardPageRoutingModule
  ],
  declarations: [ProfessordashboardPage],
  providers: [AppointmentService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProfessordashboardPageModule {}
