import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfessordashboardPage } from './professordashboard.page';

describe('ProfessordashboardPage', () => {
  let component: ProfessordashboardPage;
  let fixture: ComponentFixture<ProfessordashboardPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessordashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
