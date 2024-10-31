import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlunoCadastroPage } from './alunocadastro.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AlunocadastroPage', () => {
  let component: AlunoCadastroPage;
  let fixture: ComponentFixture<AlunoCadastroPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlunoCadastroPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(AlunoCadastroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
