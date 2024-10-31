import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfessordashboardPage } from './professordashboard.page';

const routes: Routes = [
  {
    path: '',
    component: ProfessordashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfessordashboardPageRoutingModule {}
