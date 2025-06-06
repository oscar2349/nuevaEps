import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Solicitud } from '../../models/solicitud';
import { Medicamento } from '../../models/medicamento';
import { FormsModule, NgForm } from '@angular/forms';
import { SolicitudService } from '../../services/solicitud.service';
import { MedicamentoService } from '../../services/medicamento.service';

@Component({
  selector: 'solicitud-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './solicitud-form.component.html',
  styleUrl: './solicitud-form.component.css'
})
export class SolicitudFormComponent {

  @Input() solicitudes: Solicitud[] = [];
  @Input() medicamentos: Medicamento[] = [];
  @Output() newSolicitudEventEmitter: EventEmitter<Solicitud> = new EventEmitter();


  solicitud: Solicitud;
  medicamento: Medicamento;
  isChecked: boolean = false;
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
      this.newSolicitudEventEmitter.emit(this.solicitud);
      console.log(this.solicitud);
    }
    userForm.reset();
    userForm.resetForm();
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
  console.log(this.isChecked)
}
}
