package com.example.msvc.solicitudes.services;

import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import com.example.msvc.solicitudes.entities.Solicitud;

public interface SolicitudService {

    List<Solicitud> findAll();

    Page<Solicitud> findAll(Pageable pageable);

    Optional<Solicitud> findById(Long id);

    Solicitud save(Solicitud product);

    void deleteById(Long id);
}
