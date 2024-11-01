import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userRoleSubject = new BehaviorSubject<string | null>(null);
  userRole$ = this.userRoleSubject.asObservable();

  login(role: string) {
    // implementar a lógica de login
    this.userRoleSubject.next(role);
  }

  logout() {
    this.userRoleSubject.next(null);
  }
}
