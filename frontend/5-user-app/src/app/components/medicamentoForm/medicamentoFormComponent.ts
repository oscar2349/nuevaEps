import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MedicamentoCrear } from '../../models/medicamento';
import { MedicamentoService } from '../../services/medicamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'appMedicamentoForm',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './medicamentoFormComponent.html',
})
export class MedicamentoFormComponent {
  medicamento: MedicamentoCrear = {
    nombre: '',
    esNoPos: false,
    cantidad: undefined
  };

  mensaje = '';
  error = '';

  constructor(
    private medicamentoService: MedicamentoService,
    private router: Router
  ) {}

  guardar() {
    this.mensaje = '';
    this.error = '';
    
    this.medicamentoService.create(this.medicamento).subscribe({
      next: (data) => {
        this.mensaje = 'Medicamento creado exitosamente';
        // Opcional: redirigir después de guardar
        this.router.navigate(['/medicamentos']);
      },
      error: (err) => {
        this.error = 'Ocurrió un error al guardar el medicamento';
      }
    });
  }
}