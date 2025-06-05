package com.example.msvc.solicitudes.services;

import java.util.List;
import java.util.Optional;

import com.example.msvc.solicitudes.entities.Medicamento;

public interface MedicamentoService {

    List<Medicamento> findAll();

    Optional<Medicamento> findById(Long id);

    Medicamento save(Medicamento medicamento);

    void deleteById(Long id);
}
