import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoCadastroPage } from './alunocadastro.page';

const routes: Routes = [
  {
    path: '',
    component: AlunoCadastroPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlunocadastroPageRoutingModule {}
