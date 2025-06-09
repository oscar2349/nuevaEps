import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Medicamento } from '../../models/medicamento'; // Asegúrate de que la ruta sea correcta
import { MedicamentoService } from '../../services/medicamento.service';

@Component({
  selector: 'app-medicamentos',
  standalone: true,
  imports: [],
  templateUrl: './medicamentos.component.html',
  styleUrl: './medicamentos.component.css'
})
export class MedicamentoComponent implements OnInit {
  medicamentos: Medicamento[] = [];
  loading = true;
  error = '';

  constructor(private medicamentoService: MedicamentoService) {}

  ngOnInit(): void {
    this.medicamentoService.findAll().subscribe({
      next: (data) => {
        this.medicamentos = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error cargando medicamentos';
        this.loading = false;
      }
    });
  }
}