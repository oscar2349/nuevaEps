package com.example.msvc.solicitudes.DTO;


public class MedicamentoDTO {
    private Long id;
    private String nombre;
    private Boolean esNoPos;
    private Integer cantidad;

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public Boolean getEsNoPos() {
        return esNoPos;
    }
    public void setEsNoPos(Boolean esNoPos) {
        this.esNoPos = esNoPos;
    }
    public Integer getCantidad() {
        return cantidad;
    }
    public void setCantidad(Integer cantidad) {
        this.cantidad = cantidad;
    }
}
