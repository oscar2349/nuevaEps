package com.example.msvc.solicitudes.services;

import java.util.List;
import java.util.Optional;

import com.example.msvc.solicitudes.entities.Solicitud;
import com.example.msvc.solicitudes.entities.Usuario;

public interface UsuarioService {

    List<Usuario> findAll();

    Optional<Usuario> findById(Long id);

    Usuario save(Usuario usuario);

    void deleteById(Long id);
}
