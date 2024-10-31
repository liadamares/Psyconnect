// src/app/services/appointment.service.ts
import { Injectable } from '@angular/core';
import { Appointment } from '../models/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private appointments: Appointment[] = [
    { id: 1, details: 'Reunião de Avaliação', time: '13:00', students: ['João', 'Maria', 'Lucas'] },
    { id: 2, details: 'Sessão de Intervenção', time: '14:00', students: ['Ana', 'Pedro', 'Carla'] }
    // Adicione mais agendamentos conforme necessário
  ];

  getAppointments(): Appointment[] {
    return this.appointments;
  }

  addAppointment(appointment: Appointment) {
    this.appointments.push(appointment);
  }
}
