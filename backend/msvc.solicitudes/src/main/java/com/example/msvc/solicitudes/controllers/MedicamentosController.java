package com.example.msvc.solicitudes.controllers;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.msvc.solicitudes.DTO.MedicamentoDTO;
import com.example.msvc.solicitudes.Mappers.MedicamentoMapper;
import com.example.msvc.solicitudes.entities.Medicamento;
import com.example.msvc.solicitudes.repositories.MedicamentoRepository;
import com.example.msvc.solicitudes.services.MedicamentoService;

@RestController
@RequestMapping("/medicamentos")
public class MedicamentosController {

    final private MedicamentoService service;

    // @Autowired
    // private UsuarioRepository usuarioRepository;

    @Autowired
    private MedicamentoRepository medicamentoRepository;

    public MedicamentosController(MedicamentoService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<?> list() {
        return ResponseEntity.ok(this.service.findAll());
    }

    @GetMapping("/page/{page}")
    public Page<Medicamento> listPageable(@PathVariable Integer page) {
        Pageable pageable = PageRequest.of(page, 4);
        return service.findAll(pageable);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> details(@PathVariable Long id) {
        Optional<Medicamento> medicamentoOptional = service.findById(id);
        if (medicamentoOptional.isPresent()) {
            return ResponseEntity.ok(medicamentoOptional.orElseThrow());
        }
        return ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<?> crearMedicamento(@RequestBody MedicamentoDTO dto, BindingResult result) {
        if (result.hasErrors()) {
            return validation(result);
        }

        Medicamento medicamento = new Medicamento();
        medicamento = MedicamentoMapper.toEntity(dto);
        Medicamento nueva = service.save(medicamento);
        return ResponseEntity.status(HttpStatus.CREATED).body(MedicamentoMapper.toDTO(nueva));
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable Long id, @RequestBody MedicamentoDTO medicamentoDTO) {
        Optional<Medicamento> medicamentoOptional = service.findById(id);
        if (medicamentoOptional.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Medicamento no encontrada.");
        }

        Medicamento medicamentoDB = MedicamentoMapper.toEntity(medicamentoDTO);
        Medicamento medicamentoActualizado = service.save(medicamentoDB);
        return ResponseEntity.ok(MedicamentoMapper.toDTO(medicamentoActualizado));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        Optional<Medicamento> medicamentoOptional = service.findById(id);
        if (medicamentoOptional.isPresent()) {
            this.service.deleteById(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

    private ResponseEntity<?> validation(BindingResult result) {
        Map<String, String> errors = new HashMap<>();
        result.getFieldErrors().forEach(error -> {
            errors.put(error.getField(), "El campo " + error.getField() + " " + error.getDefaultMessage());
        });
        return ResponseEntity.badRequest().body(errors);
    }

}
