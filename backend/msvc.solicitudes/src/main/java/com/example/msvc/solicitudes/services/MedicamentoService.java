package com.example.msvc.solicitudes.services;

import java.util.List;
import java.util.Optional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import com.example.msvc.solicitudes.entities.Medicamento;

public interface MedicamentoService {

    List<Medicamento> findAll();

    Page<Medicamento> findAll(Pageable pageable);

    Optional<Medicamento> findById(Long id);

    Medicamento save(Medicamento medicamento);

    void deleteById(Long id);
}
