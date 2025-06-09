export class Medicamento {
  id!: number;
  nombre!: string;
  esNoPos!: boolean;
  cantidad?: number;
}

export interface MedicamentoCrear {
  nombre: string;
  esNoPos: boolean;
  cantidad?: number;
}
