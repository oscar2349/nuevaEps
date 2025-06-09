import { Component, OnInit } from '@angular/core';
import { Solicitud } from '../models/solicitud';
import { Usuario } from '../models/usuario';
import { Medicamento } from '../models/medicamento';
import { SolicitudService } from '../services/solicitud.service';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';
import { SolicitudFormComponent } from "./solicitud-form/solicitud-form.component";
import { MedicamentoService } from '../services/medicamento.service';
import Swal from 'sweetalert2';
import { SolicitudPayload } from '../models/solicitudPayload';
import { UsuarioService } from '../services/usuario.service';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'user-app',
  standalone: true,
  imports: [SolicitudesComponent, SolicitudFormComponent,RouterModule],
  templateUrl: './solicitud-app.component.html'
})
export class UserAppComponent implements OnInit {
  title: string = 'Listado de Solicitudes';

  solicitudes: Solicitud[] = [];
  medicamentos: Medicamento[] = [];
  usuarios: Usuario[] = [];
  solicitudSelected: Solicitud;
  open: boolean = false;

  constructor(
    private solicitudService: SolicitudService,
    private medicamentoService: MedicamentoService,
    private usuarioService: UsuarioService
  ) {

    this.solicitudSelected = new Solicitud();
  }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {

     this.solicitudService.findAll().subscribe(data => {
      //this.solicitudService.findAllPageable(page).subscribe(data => {
      console.log('Solicitudes recibidas:', data);
      this.solicitudes = data;
    });

    this.medicamentoService.findAll().subscribe(data => {
      console.log("Medicamentos cargados:", data);
      this.medicamentos = data;
    });

    this.usuarioService.findAll().subscribe(data => {
      console.log("usuarios cargados:", data);
      this.usuarios = data;
    });
  }

 addSolicitud(solicitud: Solicitud) {
  const medicamento = this.medicamentos.find(m => m.id === solicitud.medicamento.id || m.id === solicitud.medicamento?.id);

  const solicitudPayload: SolicitudPayload = {
    usuarioId: solicitud.usuarioId,
    medicamentoId: medicamento?.id || solicitud.medicamento.id,
    numeroOrden: solicitud.numeroOrden,
    correo: solicitud.correo,
    direccion: solicitud.direccion,
    telefono: solicitud.telefono,
    fechaCreacion: solicitud.fechaCreacion || new Date().toISOString()
  };

  if (solicitud.id && solicitud.id > 0) {
    this.solicitudService.update(solicitud.id, solicitudPayload).subscribe({
      next: (updated) => {
        const solicitudCompleta: Solicitud = {
          ...updated,
          medicamento: medicamento!
        };

        this.solicitudes = this.solicitudes.map(s =>
          s.id === updated.id ? solicitudCompleta : s
        );
        this.finalizarGuardado("Solicitud actualizada exitosamente");
      },
      error: (err) => {
        console.error("Error actualizando solicitud", err);
        Swal.fire("Error", "No se pudo actualizar la solicitud", "error");
      }
    });
  } else {
    this.solicitudService.create(solicitudPayload).subscribe({
      next: (created) => {
        const solicitudCompleta: Solicitud = {
          ...created,
          medicamento: medicamento!
        };

        this.solicitudes = [...this.solicitudes, solicitudCompleta];
        this.finalizarGuardado("Solicitud creada exitosamente");
      },
      error: (err) => {
        console.error("Error creando solicitud", err);
        Swal.fire("Error", "No se pudo crear la solicitud", "error");
      }
    });
  }
}

  private finalizarGuardado(mensaje: string) {
    this.solicitudSelected = new Solicitud();
    Swal.fire("Guardado", mensaje, "success");
    this.setOpen();
  }
  medicamentoSeleccionado!: Medicamento;
  verSeleccionado() {
    console.log(this.medicamentoSeleccionado);
    console.log('ID:', this.medicamentoSeleccionado?.id);
  }

setSelectedSolicitud(solicitudRow: Solicitud): void {

  this.solicitudSelected = { ...solicitudRow };
  this.open = true;

}

  removeSolicitud(id: number): void {
    this.solicitudService.remove(id).subscribe({
      next: () => {
        this.solicitudes = this.solicitudes.filter(solicitud => solicitud.id != id);

        Swal.fire({
          title: 'Eliminado',
          text: 'La solicitud fue eliminada exitosamente',
          icon: 'success'
        });
      },
      error: (err) => {
        console.error('Error al eliminar:', err);
        Swal.fire({
          title: 'Error',
          text: 'No se pudo eliminar la solicitud',
          icon: 'error'
        });
      }
    });
  }

  setOpen() {

    this.open = !this.open;

  }

  closeForm(): void {
    this.open = false;
    this.solicitudSelected = new Solicitud(); // Limpia si es necesario
  }
}
