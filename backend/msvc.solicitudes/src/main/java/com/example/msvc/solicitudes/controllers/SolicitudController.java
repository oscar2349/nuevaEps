package com.example.msvc.solicitudes.controllers;

import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.msvc.solicitudes.entities.Solicitud;
import com.example.msvc.solicitudes.services.SolicitudService;

@RestController
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
    
    
}
