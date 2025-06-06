import { Medicamento } from './medicamento.model';

export interface Solicitud {
  id: number;
  medicamento: Medicamento;
  numeroOrden: string;
  direccion: string;
  telefono: string;
  correo: string;
  fechaCreacion: string;
}
