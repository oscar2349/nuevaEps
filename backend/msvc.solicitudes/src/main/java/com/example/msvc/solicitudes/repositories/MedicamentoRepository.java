
package com.example.msvc.solicitudes.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;

import com.example.msvc.solicitudes.entities.Medicamento;


public interface MedicamentoRepository extends CrudRepository<Medicamento, Long>{

    Page<Medicamento> findAll(Pageable pageable);

}
