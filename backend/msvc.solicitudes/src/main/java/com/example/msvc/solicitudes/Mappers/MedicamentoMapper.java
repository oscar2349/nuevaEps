package com.example.msvc.solicitudes.Mappers;

import com.example.msvc.solicitudes.DTO.MedicamentoDTO;
import com.example.msvc.solicitudes.entities.Medicamento;

public class MedicamentoMapper {

    public static Medicamento toEntity(MedicamentoDTO dto) {
        Medicamento medicamento = new Medicamento();
        medicamento.setId(dto.getId());
        medicamento.setCantidad(dto.getCantidad());
        medicamento.setEsNoPos(dto.getEsNoPos());
        medicamento.setNombre(dto.getNombre());

        return medicamento;
    }

    public static MedicamentoDTO toDTO(Medicamento medicamento) {
        MedicamentoDTO dto = new MedicamentoDTO();
        dto.setId(medicamento.getId());
        dto.setCantidad(medicamento.getCantidad());
        dto.setEsNoPos(medicamento.getEsNoPos());
        dto.setNombre(medicamento.getNombre());
        return dto;
    }
}
