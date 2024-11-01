import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alunocadastro',
  templateUrl: './alunocadastro.page.html',
  styleUrls: ['./alunocadastro.page.scss'],
})
export class AlunoCadastroPage {
  alunoForm: FormGroup;
  diasSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta'];
  horarios = ['13:00', '14:00', '15:30', '16:30'];

  constructor(private fb: FormBuilder) {
    this.alunoForm = this.fb.group({
      nomeAluno: ['', Validators.required],
      endereco: ['', Validators.required],
      turma: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      transtorno: ['', Validators.required],
      dificuldades: [''],

      nomeResponsavel: ['', Validators.required],
      idadeResponsavel: ['', [Validators.required, Validators.min(18)]],
      cpfResponsavel: ['', Validators.required],
      emailResponsavel: ['', [Validators.required, Validators.email]],

      diasAtendimento: [[], Validators.required],
      horarioAtendimento: ['', Validators.required],
      laudoMedico: [null, Validators.required],
    });
  }

  onSubmit() {
    if (this.alunoForm.valid) {
      const formData = this.alunoForm.value;
      console.log('Dados do Aluno:', formData);
      
    }
  }

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    this.alunoForm.patchValue({ laudoMedico: file });
  }
}
