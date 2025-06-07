package com.example.msvc.solicitudes.Mappers;


import com.example.msvc.solicitudes.DTO.MedicamentoDTO;
import com.example.msvc.solicitudes.DTO.SolicitudDTO;
import com.example.msvc.solicitudes.entities.Solicitud;
import com.example.msvc.solicitudes.entities.Usuario;
import com.example.msvc.solicitudes.entities.Medicamento;

public class SolicitudMapper {

    public static SolicitudDTO toDTO(Solicitud solicitud) {
        SolicitudDTO dto = new SolicitudDTO();
        dto.setId(solicitud.getId());
        dto.setUsuarioId(solicitud.getUsuario() != null ? solicitud.getUsuario().getId() : null);
        dto.setMedicamentoId(solicitud.getMedicamento() != null ? solicitud.getMedicamento().getId() : null);
        dto.setNumeroOrden(solicitud.getNumeroOrden());
        dto.setDireccion(solicitud.getDireccion());
        dto.setTelefono(solicitud.getTelefono());
        dto.setCorreo(solicitud.getCorreo());
        dto.setFechaCreacion(solicitud.getFechaCreacion());
        return dto;
    }

    public static Solicitud toEntity(SolicitudDTO dto) {
        Solicitud solicitud = new Solicitud();
        solicitud.setId(dto.getId());

        // Solo seteamos entidades con su ID. No se cargan completas.
        if (dto.getUsuarioId() != null) {
            Usuario usuario = new Usuario();
            usuario.setId(dto.getUsuarioId());
            solicitud.setUsuario(usuario);
        }

        if (dto.getMedicamentoId() != null) {
            Medicamento medicamento = new Medicamento();
            medicamento.setId(dto.getMedicamentoId());
            solicitud.setMedicamento(medicamento);
        }

        solicitud.setNumeroOrden(dto.getNumeroOrden());
        solicitud.setDireccion(dto.getDireccion());
        solicitud.setTelefono(dto.getTelefono());
        solicitud.setCorreo(dto.getCorreo());
        solicitud.setFechaCreacion(dto.getFechaCreacion());
        return solicitud;
    }
}
