# Medicamentos App

Aplicación full stack basada en Micro - servicios para gestionar solicitudes de medicamentos.

## Tecnologías
- Angular
- Docker - Docker Compose  
- Spring Boot
- MySQL
- JWT

## Esquema Base de Datos

Eureka Server http://localhost:8761/
1. Tabla usuarios
2. Tabla medicamentos  localhost:8001/{id} -- 
3. Tabla solicitudes


## Módulos
- Autenticación (`/auth`)
- Solicitudes de medicamentos (`/solicitudes`)

## Instrucciones

1. Crear BD en MySQL con `schema.sql`
2. Levantar `auth-service`
3. Levantar `solicitudes-service`
4. Levantar Angular App (`ng serve`)
docker-compose up -d --build



