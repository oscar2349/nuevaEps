import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Solicitud } from '../../models/solicitud';
import { Medicamento } from '../../models/medicamento';
import { Usuario } from '../../models/usuario';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'solicitud-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './solicitud-form.component.html',
})
export class SolicitudFormComponent {
  @Input() medicamentos: Medicamento[] = [];
  @Input() usuarios: Usuario[] = [];
  @Input() solicitud: Solicitud = new Solicitud();

  @Output() solicitudEventEmitter = new EventEmitter<Solicitud>();
  @Output() cancelEvent = new EventEmitter<void>();

  medicamentoSeleccionado: Medicamento | null = null;
  usuarioSeleccionado: Usuario | null = null;

  onSubmit(form: NgForm): void {
    if (!this.medicamentoSeleccionado || !this.usuarioSeleccionado) {
      console.error('Debe seleccionar un medicamento y un usuario');
      return;
    }

    if (form.valid) {
      console.log('Formulario válido, enviando solicitud...');
      console.log('Medicamento seleccionado:', this.medicamentoSeleccionado); 
      const solicitudAEnviar: Solicitud = {...this.solicitud,
        medicamento: { ...this.medicamentoSeleccionado },
        usuarioId: this.usuarioSeleccionado.id
      };

      console.log('Solicitud enviada:', solicitudAEnviar);
      this.solicitudEventEmitter.emit(solicitudAEnviar);

      // Limpiar estados locales y formulario
      this.solicitud = new Solicitud();
      this.medicamentoSeleccionado = null;
      this.usuarioSeleccionado = null;
      form.resetForm();
    }
  }

  onClear(form: NgForm): void {
    this.solicitud = new Solicitud();
    this.medicamentoSeleccionado = null;
    this.usuarioSeleccionado = null;
    form.resetForm();
  }

  onCancel(form: NgForm): void {
    form.resetForm();
    this.cancelEvent.emit();
  }

  onMedicamentoChange(): void {
    console.log('Medicamento seleccionado:', this.medicamentoSeleccionado);
    if (this.medicamentoSeleccionado) {
      this.solicitud.medicamento = this.medicamentoSeleccionado;
    }
  }

  onUsuarioChange(): void {
    console.log('Usuario seleccionado:', this.usuarioSeleccionado);
    if (this.usuarioSeleccionado) {
      this.solicitud.usuarioId = this.usuarioSeleccionado.id;
    }
  }

  compararMedicamentos(m1: Medicamento, m2: Medicamento): boolean {
    return m1 && m2 ? m1.id === m2.id : m1 === m2;
  }

  compararUsuarios(u1: Usuario, u2: Usuario): boolean {
    return u1 && u2 ? u1.id === u2.id : u1 === u2;
  }
}
