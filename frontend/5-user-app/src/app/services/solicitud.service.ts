import { Injectable } from '@angular/core';
import { Solicitud } from '../models/solicitud';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  private solicitud: Solicitud[] = [{
        "id": 1,
        "medicamento": {
            "id": 10,
            "nombre": "Paracetamol",
            "esNoPos": true,
            "cantidad": 8
        },
        "numeroOrden": "ORD12345",
        "direccion": "Calle Falsa 123",
        "telefono": "123456789",
        "correo": "usuario@example.com",
        "fechaCreacion": "2025-06-05T14:30:00"
    },
    {    "id": 2,
        "medicamento": {
            "id": 10,
            "nombre": "Nivolumab",
            "esNoPos": false,
            "cantidad": 8
        },
        "numeroOrden": "ORD12345",
        "direccion": "Calle Falsa 123",
        "telefono": "123456789",
        "correo": "usuario@example.com",
        "fechaCreacion": "2025-06-05T14:30:00"
    },
   {    "id": 3,
        "medicamento": {
            "id": 10,
            "nombre": "Ibuprofeno",
            "esNoPos": true,
            "cantidad": 8
        },
        "numeroOrden": "ORD12345",
        "direccion": "Calle Falsa 123",
        "telefono": "123456789",
        "correo": "usuario@example.com",
        "fechaCreacion": "2025-06-05T14:30:00"
    },
  
  ];

  constructor() { }

  findAll(): Observable<Solicitud[]> {
    return of(this.solicitud);
  }
}


