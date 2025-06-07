import { Component, computed, EventEmitter, Input, Output, signal } from '@angular/core';
import { Solicitud } from '../../models/solicitud';
import { Medicamento } from '../../models/medicamento';
import { FormsModule, NgForm } from '@angular/forms';
import { SolicitudService } from '../../services/solicitud.service';
import { MedicamentoService } from '../../services/medicamento.service';

@Component({
  selector: 'solicitud-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './solicitud-form.component.html'
})
export class SolicitudFormComponent {

  @Input() solicitudes: Solicitud[] = [];
  @Input() medicamentos: Medicamento[] = [];
  @Output() newSolicitudEventEmitter: EventEmitter<Solicitud> = new EventEmitter();
  @Input() solicitud: Solicitud;
  @Input() isChecked: boolean = false;
  @Input() isUpdate: boolean = false;

  medicamento: Medicamento;
  newSolicitud: Solicitud = new Solicitud;

  medicamentoService!: MedicamentoService;
  medicamentoSeleccionado: Medicamento | null = null;

  constructor(private MedicamentoService: MedicamentoService) {
    this.solicitud = new Solicitud();
    this.medicamento = new Medicamento();
    this.solicitud.medicamento = this.medicamento;

  }
  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {
    this.MedicamentoService.findAll().subscribe(data => {
      this.medicamentos = data;
    });
  }


  onSubmit(userForm: NgForm): void {
    if (userForm.valid) {
      this.solicitud.medicamento.cantidad = this.medicamento.cantidad;

      // Crear nueva instancia para evitar referencia compartida
      this.newSolicitud = {
        ...this.solicitud,
        medicamento: { ...this.solicitud.medicamento }
      };

      this.newSolicitudEventEmitter.emit(this.newSolicitud);
      this.solicitud = new Solicitud(); // Limpia la instancia actual
      userForm.reset();
      userForm.resetForm();
    }
  }


  onClear(userForm: NgForm): void {
    this.solicitud = new Solicitud();
    userForm.reset();
    userForm.resetForm();

  }

  compararMedicamentos(m1: Medicamento, m2: Medicamento): boolean {
    return m1 && m2 ? m1.id === m2.id : m1 === m2;

  }

  onMedicamentoChange() {

    this.isChecked = this.solicitud.medicamento?.esNoPos ?? false;

  }
}
