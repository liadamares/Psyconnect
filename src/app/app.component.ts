import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  isProfessor = false;
  isResponsavel = false;

  constructor(private authService: AuthService) {
    this.authService.userRole$.subscribe(role => {
      this.isProfessor = role === 'professor';
      this.isResponsavel = role === 'responsavel';
    });
  }

  logout() {
    this.authService.logout();
  }
}
