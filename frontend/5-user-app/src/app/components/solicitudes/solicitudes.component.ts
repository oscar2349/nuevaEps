import { CommonModule } from '@angular/common'; // 👈 importar CommonModule
import { Solicitud } from '../../models/solicitud';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SolicitudFormComponent } from "../solicitud-form/solicitud-form.component";

@Component({
  selector: 'app-solicitudes',
  standalone: true,
  imports: [SolicitudFormComponent,CommonModule],
  templateUrl: './solicitudes.component.html',
})
export class SolicitudesComponent {
  solicitud: Solicitud;

  @Input() solicitudes: Solicitud[] = [];
  @Output() idSolicitudEventEmitter = new EventEmitter();
  @Output() selectdSolicitudEventEmitter = new EventEmitter();
  update:boolean=false;


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
  
    this.update=true
    this.selectdSolicitudEventEmitter.emit(solicitud);
  }


currentPage = 0;
pageSize = 5;

get totalPages(): number {
  return Math.ceil(this.solicitudes.length / this.pageSize);
}

get solicitudesPaginadas(): Solicitud[] {
  const start = this.currentPage * this.pageSize;
  return this.solicitudes.slice(start, start + this.pageSize);
}

goToPage(page: number): void {
  if (page >= 0 && page < this.totalPages) {
    this.currentPage = page;
  }
}

visiblePagesWindow = 5;

getVisiblePages(): number[] {
  const half = Math.floor(this.visiblePagesWindow / 2);
  let start = Math.max(0, this.currentPage - half);
  let end = start + this.visiblePagesWindow;

  if (end > this.totalPages) {
    end = this.totalPages;
    start = Math.max(0, end - this.visiblePagesWindow);
  }

  const pages: number[] = [];
  for (let i = start; i < end; i++) {
    pages.push(i);
  }
  return pages;
}

}

