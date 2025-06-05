package com.example.msvc.solicitudes.services;

import java.util.List;
import java.util.Optional;

import com.example.msvc.solicitudes.entities.Solicitud;

public interface SolicitudService {

    List<Solicitud> findAll();

    Optional<Solicitud> findById(Long id);
}
