import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Medicamento } from '../models/medicamento';


@Injectable({
  providedIn: 'root'
})
export class MedicamentoService {

  private medicamento: Medicamento[] = [
  { "id": 1, "nombre": "Paracetamol",    "esNoPos": true, "cantidad": 200 },
  { "id": 2, "nombre": "Ibuprofeno",     "esNoPos": false, "cantidad": 150 },
  { "id": 3, "nombre": "Nivolumab",       "esNoPos": true,  "cantidad": 8   },
  { "id": 4, "nombre": "Metformina",      "esNoPos": false, "cantidad": 100 },
  { "id": 5, "nombre": "Trastuzumab",     "esNoPos": true,  "cantidad": 5   }
];

  constructor() { }

  findAll(): Observable<Medicamento[]> {
    return of(this.medicamento);
  }
}


