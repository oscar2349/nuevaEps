
package com.example.msvc.solicitudes.repositories;

import org.springframework.data.repository.CrudRepository;

import com.example.msvc.solicitudes.entities.Medicamento;
import com.example.msvc.solicitudes.entities.Solicitud;


public interface MedicamentoRepository extends CrudRepository<Medicamento, Long>{

}
