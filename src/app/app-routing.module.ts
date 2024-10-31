import { NgModule,  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage } from './pages/login/login.page';
import { AlunoCadastroPage } from './pages/alunocadastro/alunocadastro.page';
import { AgendamentosPage } from './pages/agendamentos/agendamentos.page';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginPage },
  { path: 'alunoCadastro', component: AlunoCadastroPage, canActivate: [AuthGuard] },
  { path: 'agendamentos', component: AgendamentosPage, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
