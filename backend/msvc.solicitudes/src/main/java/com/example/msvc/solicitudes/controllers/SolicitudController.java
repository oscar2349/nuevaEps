package com.example.msvc.solicitudes.controllers;

import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.msvc.solicitudes.entities.Solicitud;
import com.example.msvc.solicitudes.services.SolicitudService;

@RestController
@RequestMapping("/solicitudes")
public class SolicitudController {

    final private SolicitudService service;

    public SolicitudController(SolicitudService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<?> list() {
        return ResponseEntity.ok(this.service.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> details(@PathVariable Long id) {
        Optional<Solicitud> solicitudOptional = service.findById(id);
        if(solicitudOptional.isPresent()){
            return ResponseEntity.ok(solicitudOptional.orElseThrow());
        }
        return ResponseEntity.notFound().build();
    }
    

    @PostMapping
    public ResponseEntity<Solicitud> create(@RequestBody Solicitud solicitud) {
        return ResponseEntity.status(HttpStatus.CREATED).body(service.save(solicitud));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable Long id, @RequestBody Solicitud solicitud) {
        Optional<Solicitud> solicitudOptional = service.findById(id);
        if (solicitudOptional.isPresent()) {
            Solicitud solicitudDb = solicitudOptional.orElseThrow();
            solicitudDb.setUsuario(solicitud.getUsuario());
            solicitudDb.setMedicamento(solicitud.getMedicamento());
            solicitudDb.setNumeroOrden(solicitud.getNumeroOrden());
            solicitudDb.setDireccion(solicitud.getDireccion());
            solicitudDb.setTelefono(solicitud.getTelefono());
            solicitudDb.setCorreo(solicitud.getCorreo());
            solicitudDb.setFechaCreacion(solicitud.getFechaCreacion());

            return ResponseEntity.status(HttpStatus.CREATED).body(service.save(solicitudDb));
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        Optional<Solicitud> solicitudOptional = service.findById(id);
        if (solicitudOptional.isPresent()) {
            this.service.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
    
}
