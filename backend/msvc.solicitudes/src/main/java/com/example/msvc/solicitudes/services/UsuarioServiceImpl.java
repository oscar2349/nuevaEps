package com.example.msvc.solicitudes.services;


import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.core.env.Environment;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.msvc.solicitudes.entities.Usuario;
import com.example.msvc.solicitudes.repositories.UsuarioRepository;


@Service
public class UsuarioServiceImpl implements UsuarioService {

    final private UsuarioRepository repository;


    public UsuarioServiceImpl(UsuarioRepository repository, Environment environment) {
        this.repository = repository;
    }

    @Override
    @Transactional(readOnly = true)
    public List<Usuario> findAll() {
        return ((List<Usuario>) repository.findAll()).stream().map(usuario -> {
            
            return usuario;
        }).collect(Collectors.toList());
    }

    @Override
    @Transactional(readOnly = true)
    public Optional<Usuario> findById(Long id) {
        return repository.findById(id).map(Usuario -> {
            
            return Usuario;
        });
    }


    @Override
    @Transactional
    public Usuario save(Usuario usuario) {
        return this.repository.save(usuario);
    }

    @Transactional
    @Override
    public void deleteById(Long id) {
        repository.deleteById(id);
    }
    
}
