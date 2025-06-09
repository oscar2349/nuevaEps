import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Medicamento, MedicamentoCrear } from '../models/medicamento';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MedicamentoService {

  private url: string = 'http://localhost:8090/medicamentos';


  private medicamento: Medicamento[] = [
  ];

  constructor(private http: HttpClient) { }

  findAll(): Observable<Medicamento[]> {
    //return of(this.medicamento);
    return this.http.get<Medicamento[]>(this.url);
  }
  create(medicamento: MedicamentoCrear): Observable<Medicamento> {
    return this.http.post<Medicamento>(this.url, medicamento);
  }
}

