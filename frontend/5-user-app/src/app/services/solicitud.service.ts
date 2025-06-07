import { Injectable } from '@angular/core';
import { Solicitud } from '../models/solicitud';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


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
    findById(id: number): Observable<Solicitud> {
    return this.http.get<Solicitud>(`${this.url}/${id}`);
  }

  create(user: Solicitud): Observable<Solicitud>{
    return this.http.post<Solicitud>(this.url, user);
  }

  update(user: Solicitud): Observable<Solicitud>{
    return this.http.put<Solicitud>(`${this.url}/${user.id}`, user);
  }

  remove(id: number): Observable<void>{
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}


