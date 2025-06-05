package com.example.msvc.solicitudes.services;


import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.msvc.solicitudes.entities.Solicitud;
import com.example.msvc.solicitudes.repositories.SolicitudRepository;


@Service
public class SolicitudServiceImpl implements SolicitudService {

    final private SolicitudRepository repository;


    public SolicitudServiceImpl(SolicitudRepository repository, Environment environment) {
        this.repository = repository;
    }

    @Override
    @Transactional(readOnly = true)
    public List<Solicitud> findAll() {
        return ((List<Solicitud>) repository.findAll()).stream().map(product -> {
            
            return product;
        }).collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<Solicitud> findById(Long id) {
        return repository.findById(id).map(Solicitud -> {
            
            return Solicitud;
        });
    }


      @Override
    @Transactional
    public Solicitud save(Solicitud product) {
        return this.repository.save(product);
    }

    @Transactional
    @Override
    public void deleteById(Long id) {
        repository.deleteById(id);
    }
    
}
