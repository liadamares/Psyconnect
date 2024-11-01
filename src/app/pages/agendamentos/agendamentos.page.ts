import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AppointmentModalComponent } from '../modal/appointment-modal/appointment-modal.component';
import { Appointment } from '../models/appointment.model';
import { AppointmentService } from '../services/appointment.service';
@Component({
  selector: 'app-agendamentos',
  templateUrl: './agendamentos.page.html',
  styleUrls: ['./agendamentos.page.scss'],
})
export class AgendamentosPage {
  appointments: Appointment[] = [];
  searchTerm: string = '';

  constructor(private modalController: ModalController, private appointmentService: AppointmentService) {
    this.appointments = this.appointmentService.getAppointments();
  }

  async openModal(appointment?: Appointment) {
    const modal = await this.modalController.create({
      component: AppointmentModalComponent,
      componentProps: { appointment },
    });
    await modal.present();
  }

  addAppointment() {

  }

  editAppointment(appointment: Appointment) {

  }

  deleteAppointment(appointment: Appointment) {
    this.appointments = this.appointments.filter(a => a !== appointment);

  }

  searchAppointments() {

  }
}
