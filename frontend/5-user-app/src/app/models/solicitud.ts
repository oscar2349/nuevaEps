import { Medicamento } from "./medicamento";

export class Solicitud {
  id!: number;
  usuarioId!: number;
  medicamento!: Medicamento;
  numeroOrden!: string;
  direccion!: string;
  telefono!: string;
  correo!: string;
  fechaCreacion!: string;

}
