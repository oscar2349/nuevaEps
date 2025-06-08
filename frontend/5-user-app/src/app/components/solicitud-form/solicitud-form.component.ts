import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Solicitud } from '../../models/solicitud';
import { Medicamento } from '../../models/medicamento';
import { FormsModule, NgForm } from '@angular/forms';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'solicitud-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './solicitud-form.component.html'
})
export class SolicitudFormComponent {
  @Input() medicamentos: Medicamento[] = [];
  @Input() usuarios: Usuario[] = [];
  @Input() solicitud: Solicitud = new Solicitud();
  @Output() solicitudEventEmitter = new EventEmitter<Solicitud>();
  @Output() cancelEvent = new EventEmitter<void>();

  medicamentoSeleccionado!: Medicamento;
  usuarioSeleccionado!: Usuario;

  onSubmit(userForm: NgForm): void {
    if (userForm.valid) {
      this.solicitud.medicamento = { ...this.medicamentoSeleccionado };
      this.solicitud.usuarioId = this.usuarioSeleccionado?.id;
      this.solicitudEventEmitter.emit(this.solicitud);
      this.solicitud = new Solicitud();
      this.medicamentoSeleccionado = new Medicamento();
      this.usuarioSeleccionado = new Usuario();
      console.log('Solicitud enviada:', this.solicitud);
      userForm.resetForm();
    }
  }


  onClear(userForm: NgForm): void {
    this.solicitud = new Solicitud();
    userForm.resetForm();
  }

  onCancel(userForm: NgForm): void {
    userForm.resetForm();
    this.cancelEvent.emit();
  }

  onMedicamentoChange(): void {
console.log('Medicamento seleccionado:', this.medicamentoSeleccionado);
    if (this.medicamentoSeleccionado) {
      this.solicitud.medicamento = this.medicamentoSeleccionado;
      console.log('Solicitud medicamento:', this.solicitud.medicamento);
    }
  }

  onUsuarioChange(): void {

  }

  compararMedicamentos(m1: Medicamento, m2: Medicamento): boolean {
    return m1 && m2 ? m1.id === m2.id : m1 === m2;
  }
}
