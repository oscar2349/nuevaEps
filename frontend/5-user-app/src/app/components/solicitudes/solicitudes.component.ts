import { Solicitud } from '../../models/solicitud';
import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-solicitudes',
  standalone: true,
  imports: [],
  templateUrl: './solicitudes.component.html',
})
export class SolicitudesComponent {
  solicitud: Solicitud;

  @Input() solicitudes: Solicitud[] = [];
  @Output() idSolicitudEventEmitter = new EventEmitter();
  @Output() selectdSolicitudEventEmitter = new EventEmitter();


  constructor() {
    this.solicitud = new Solicitud();
  }

  onRemoveSolicitud(id: number): void {
    const confirmRemove = confirm('Esta seguro que desea eliminar?');
    if (confirmRemove) {
      this.idSolicitudEventEmitter.emit(id);
    }
  }

  onSelectedSolicitud(solicitud: Solicitud): void {
    this.selectdSolicitudEventEmitter.emit(solicitud);
  }

}

