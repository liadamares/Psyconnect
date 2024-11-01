import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Appointment } from '../../models/appointment.model';

@Component({
  selector: 'app-appointment-modal',
  templateUrl: './appointment-modal.component.html',
  styleUrls: ['./appointment-modal.component.scss'],
})
export class AppointmentModalComponent implements OnInit {
  @Input() appointment: Appointment | undefined;

  constructor(private modalController: ModalController) { }

  ngOnInit() {

  }

  dismiss() {
    this.modalController.dismiss();
  }
}
