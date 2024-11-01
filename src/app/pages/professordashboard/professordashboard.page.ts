import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AppointmentModalComponent } from '../modal/appointment-modal/appointment-modal.component';
import { AppointmentService } from '../services/appointment.service';
import { Appointment } from '../models/appointment.model';
@Component({
  selector: 'app-professordashboard',
  templateUrl: './professordashboard.page.html',
  styleUrls: ['./professordashboard.page.scss'],
})
export class ProfessordashboardPage implements OnInit {
  days: string[] = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];
  selectedDate: string | null = null;
  appointments: { [key: string]: Appointment[] } = {};

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit() {
    this.loadAppointments();
  }

  loadAppointments() {
   
    const allAppointments = this.appointmentService.getAppointments();
    allAppointments.forEach(appointment => {
      const day = this.getDayFromTime(appointment.time);
      if (!this.appointments[day]) {
        this.appointments[day] = [];
      }
      this.appointments[day].push(appointment);
    });
  }

  expandDay(day: string) {
    this.selectedDate = this.selectedDate === day ? null : day;
  }

  logout() {

    console.log('Logout realizado');
  }

  private getDayFromTime(time: string): string {

    return this.days[new Date().getDay()];
  }
}
