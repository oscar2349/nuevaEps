import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicamentoComponent } from './medicamentos.component';

describe('MedicamentosComponent', () => {
  let component: MedicamentoComponent;
  let fixture: ComponentFixture<MedicamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicamentoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MedicamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
