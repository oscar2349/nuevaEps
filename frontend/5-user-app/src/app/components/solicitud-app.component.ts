import { Component, OnInit } from '@angular/core';
import { Solicitud } from '../models/solicitud';
import { Medicamento } from '../models/medicamento';
import { SolicitudService } from '../services/solicitud.service';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { SolicitudFormComponent } from "./solicitud-form/solicitud-form.component";
import { MedicamentoService } from '../services/medicamento.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'user-app',
  standalone: true,
  imports: [SolicitudesComponent, SolicitudFormComponent],
  templateUrl: './solicitud-app.component.html'
})
export class UserAppComponent implements OnInit {
  title: string = 'Listado de Solicitudes';

  solicitudes: Solicitud[] = [];
  medicamentos: Medicamento[] = [];
  solicitudSelected: Solicitud;
  open: boolean = false;

  constructor(
    private solicitudService: SolicitudService,
    private MedicamentoService: MedicamentoService
  ) {

    this.solicitudSelected = new Solicitud();
  }


  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {

    this.solicitudService.findAll().subscribe(data => {
      this.solicitudes = data;
    });

    this.MedicamentoService.findAll().subscribe(data => {
      this.medicamentos = data;
    });
  }

  addSolicitud(solicitud: Solicitud) {
    if (solicitud.id > 0) {
      this.solicitudes = this.solicitudes.map(u => (u.id == solicitud.id) ? { ...solicitud } : u);
    } else {
      this.solicitudes = [
        ...this.solicitudes,
        {
          ...solicitud,
          id: Date.now(),
          fechaCreacion: new Date().toISOString()
        }
      ];

    }

    this.solicitudSelected = new Solicitud();

    Swal.fire({
      title: "Guardado!",
      text: "Solicitud Creada Exitosamente",
      icon: "success"
    });
    this.setOpen();
  }

  medicamentoSeleccionado!: Medicamento;
  verSeleccionado() {
    console.log(this.medicamentoSeleccionado);
    console.log('ID:', this.medicamentoSeleccionado?.id);
  }

  setSelectedSolicitud(userRow: Solicitud): void {
    this.solicitudSelected = { ...userRow };
    this.open = true;
  }

  removeSolicitud(id: number): void {
    this.solicitudes = this.solicitudes.filter(solicitud => solicitud.id != id);
  }

  setOpen() {

    this.open = !this.open;

  }


  closeForm(): void {
    this.open = false;
    this.solicitudSelected = new Solicitud(); // Limpia si es necesario
  }
}
