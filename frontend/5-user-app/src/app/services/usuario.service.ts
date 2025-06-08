import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SolicitudPayload } from '../models/solicitudPayload';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url: string = 'http://localhost:8090/users';


  private usuario: Usuario[] = [];

  constructor(private http: HttpClient) { }



  findAll(): Observable<Usuario[]> {
  return this.http.get<Usuario[]>(this.url);
  }


  findAllPageable(page: number): Observable<any> {
    return this.http.get<any[]>(`${this.url}/page/${page}`);
  }

  findById(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.url}/${id}`);
  }

  create(payload: SolicitudPayload): Observable<Usuario> {
    return this.http.post<Usuario>(this.url, payload);
  }

  update(user: SolicitudPayload): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.url}/${user.usuarioId}`, user);
  }

  remove(id: number): Observable<void> {
    console.log(`${this.url}/${id}`)
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}


