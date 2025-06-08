import { Injectable } from '@angular/core';
import { Solicitud } from '../models/solicitud';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SolicitudPayload } from '../models/solicitudPayload';


@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  private url: string = 'http://localhost:8090/solicitudes';


  private solicitud: Solicitud[] = [];

  constructor(private http: HttpClient) { }



  findAll(): Observable<Solicitud[]> {
    //return of(this.solicitud);
    return this.http.get<Solicitud[]>(this.url);
  }


  findAllPageable(page: number): Observable<any> {
    return this.http.get<any[]>(`${this.url}/page/${page}`);
  }

  findById(id: number): Observable<Solicitud> {
    return this.http.get<Solicitud>(`${this.url}/${id}`);
  }

  create(payload: SolicitudPayload): Observable<Solicitud> {
    return this.http.post<Solicitud>(this.url, payload);
  }

  update(id: number, payload: SolicitudPayload): Observable<Solicitud> {
    return this.http.put<Solicitud>(`${this.url}/${id}`, payload);
  }

  remove(id: number): Observable<void> {
    console.log(`${this.url}/${id}`)
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}


