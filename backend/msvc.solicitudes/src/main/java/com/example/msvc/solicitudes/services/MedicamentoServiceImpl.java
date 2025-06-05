package com.example.msvc.solicitudes.services;


import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.msvc.solicitudes.entities.Medicamento;
import com.example.msvc.solicitudes.repositories.MedicamentoRepository;


@Service
public class MedicamentoServiceImpl implements MedicamentoService {

    final private MedicamentoRepository repository;


    public MedicamentoServiceImpl(MedicamentoRepository repository, Environment environment) {
        this.repository = repository;
    }

    @Override
    @Transactional(readOnly = true)
    public List<Medicamento> findAll() {
        return ((List<Medicamento>) repository.findAll()).stream().map(medicamento -> {
            
            return medicamento;
        }).collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<Medicamento> findById(Long id) {
        return repository.findById(id).map(Medicamento -> {
            
            return Medicamento;
        });
    }


    @Override
    @Transactional
    public Medicamento save(Medicamento medicamento) {
        return this.repository.save(medicamento);
    }

    @Transactional
    @Override
    public void deleteById(Long id) {
        repository.deleteById(id);
    }
    
}
