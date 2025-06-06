
package com.example.msvc.solicitudes.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;

import com.example.msvc.solicitudes.entities.Solicitud;


public interface SolicitudRepository extends CrudRepository<Solicitud, Long>{

     Page<Solicitud> findAll(Pageable pageable);

}
