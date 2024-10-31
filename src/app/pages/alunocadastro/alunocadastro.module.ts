import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AlunoCadastroPage } from './alunocadastro.page';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AlunoCadastroPage],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: AlunoCadastroPage }])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AlunoCadastroPageModule {}
