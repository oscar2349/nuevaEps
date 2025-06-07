import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Medicamento } from '../models/medicamento';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MedicamentoService {

  private url: string = 'http://localhost:8090/medicamentos';


  private medicamento: Medicamento[] = [
  // { "id": 1, "nombre": "Paracetamol",    "esNoPos": true, "cantidad": 200 },
  // { "id": 2, "nombre": "Ibuprofeno",     "esNoPos": false, "cantidad": 150 },
  // { "id": 3, "nombre": "Nivolumab",       "esNoPos": true,  "cantidad": 8   },
  // { "id": 4, "nombre": "Metformina",      "esNoPos": false, "cantidad": 100 },
  // { "id": 5, "nombre": "Trastuzumab",     "esNoPos": true,  "cantidad": 5   }
];

  constructor( private http: HttpClient ) { }

  findAll(): Observable<Medicamento[]> {
    //return of(this.medicamento);
    return this.http.get<Medicamento[]>(this.url);
  }
}


