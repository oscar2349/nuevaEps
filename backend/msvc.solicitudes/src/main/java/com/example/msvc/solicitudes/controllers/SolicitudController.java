package com.example.msvc.solicitudes.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.msvc.solicitudes.DTO.SolicitudDTO;
import com.example.msvc.solicitudes.Mappers.SolicitudMapper;
import com.example.msvc.solicitudes.entities.Medicamento;
import com.example.msvc.solicitudes.entities.Solicitud;
import com.example.msvc.solicitudes.entities.Usuario;
import com.example.msvc.solicitudes.repositories.MedicamentoRepository;
import com.example.msvc.solicitudes.repositories.UsuarioRepository;
import com.example.msvc.solicitudes.services.SolicitudService;

@RestController
@RequestMapping("/solicitudes")
public class SolicitudController {

    final private SolicitudService service;

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private MedicamentoRepository medicamentoRepository;

    public SolicitudController(SolicitudService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<?> list() {
        return ResponseEntity.ok(this.service.findAll());
    }

    @GetMapping("/page/{page}")
    public Page<Solicitud> listPageable(@PathVariable Integer page) {
        Pageable pageable = PageRequest.of(page, 4);
        return service.findAll(pageable);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> details(@PathVariable Long id) {
        Optional<Solicitud> solicitudOptional = service.findById(id);
        if (solicitudOptional.isPresent()) {
            return ResponseEntity.ok(solicitudOptional.orElseThrow());
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<?> crearSolicitud(@RequestBody SolicitudDTO dto) {
        Solicitud solicitud = SolicitudMapper.toEntity(dto);
        Solicitud nueva = service.save(solicitud);
        return ResponseEntity.status(HttpStatus.CREATED).body(SolicitudMapper.toDTO(nueva));
    }
@PutMapping("/{id}")
public ResponseEntity<?> update(@PathVariable Long id, @RequestBody SolicitudDTO solicitudDTO) {
    Optional<Solicitud> solicitudOptional = service.findById(id);
    if (solicitudOptional.isEmpty()) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Solicitud no encontrada.");
    }

    // Buscar usuario
    Optional<Usuario> usuarioOpt = usuarioRepository.findById(solicitudDTO.getUsuarioId());
    if (usuarioOpt.isEmpty()) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Usuario no encontrado con ID: " + solicitudDTO.getUsuarioId());
    }

    // Buscar medicamento
    Optional<Medicamento> medicamentoOpt = medicamentoRepository.findById(solicitudDTO.getMedicamentoId());
    if (medicamentoOpt.isEmpty()) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Medicamento no encontrado con ID: " + solicitudDTO.getMedicamentoId());
    }

    // Actualizar campos
    Solicitud solicitudDb = solicitudOptional.get();
    solicitudDb.setUsuario(usuarioOpt.get());
    solicitudDb.setMedicamento(medicamentoOpt.get());
    solicitudDb.setNumeroOrden(solicitudDTO.getNumeroOrden());
    solicitudDb.setDireccion(solicitudDTO.getDireccion());
    solicitudDb.setTelefono(solicitudDTO.getTelefono());
    solicitudDb.setCorreo(solicitudDTO.getCorreo());
    solicitudDb.setFechaCreacion(solicitudDTO.getFechaCreacion());

    Solicitud solicitudActualizada = service.save(solicitudDb);

    // Puedes devolver un DTO si quieres mantener consistencia
    return ResponseEntity.ok(SolicitudMapper.toDTO(solicitudActualizada));
}

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        Optional<Solicitud> solicitudOptional = service.findById(id);
        if (solicitudOptional.isPresent()) {
            this.service.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

}
