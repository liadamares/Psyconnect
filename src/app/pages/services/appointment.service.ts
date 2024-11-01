import { Injectable } from '@angular/core';
import { Appointment } from 'src/app/pages/models/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private appointments: Appointment[] = [];

  constructor() {}

  addAppointment(appointment: Appointment) {
    this.appointments.push(appointment);
  }

  getAppointments(): Appointment[] {
    return this.appointments;
  }
}
