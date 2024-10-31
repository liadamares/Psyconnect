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
  selectedDate: string | null = null; // Para guardar a data selecionada
  appointments: { [key: string]: Appointment[] } = {}; // Dicionário para armazenar agendamentos por dia

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit() {
    this.loadAppointments(); // Carrega os agendamentos ao iniciar
  }

  loadAppointments() {
    // Inicializa os agendamentos
    const allAppointments = this.appointmentService.getAppointments();
    allAppointments.forEach(appointment => {
      const day = this.getDayFromTime(appointment.time); // Implementar esta função para mapear o horário para um dia específico
      if (!this.appointments[day]) {
        this.appointments[day] = [];
      }
      this.appointments[day].push(appointment);
    });
  }

  expandDay(day: string) {
    this.selectedDate = this.selectedDate === day ? null : day; // Alterna a exibição dos agendamentos
  }

  logout() {
    // Lógica para logout
    console.log('Logout realizado');
  }

  private getDayFromTime(time: string): string {
    // Esta função deve retornar o dia baseado no horário ou uma lógica que você tenha para os dias
    // Exemplo simples (substitua pela sua lógica):
    return this.days[new Date().getDay()]; // Retorna o dia atual
  }
}
