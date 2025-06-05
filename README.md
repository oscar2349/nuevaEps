# Medicamentos App

Aplicación full stack basada en Micro - servicios para gestionar solicitudes de medicamentos.

## Tecnologías
- Angular
- Docker - Docker Compose  
- Spring Boot
- Eureka Server
- Spring Cloud ApiGateway
- Spring Cloud load Balancer
- MySQL
- JWT

## Esquema Base de Datos

Eureka Server 
1. Tabla usuarios
2. Tabla medicamentos
3. Tabla solicitudes


## Módulos
- Autenticación (`/auth`)
- Solicitudes de medicamentos (`/solicitudes`)

## Instrucciones

1. Crear BD en MySQL con `schema.sql`
2. Levantar `auth-service`
3. Levantar `solicitudes-service`
4. Levantar Angular App (`ng serve`)


## URLs Servicios

- Microservicios Solicitudes: http://localhost:8888 O http://localhost:{52781} Puerto Random
- Eureka Server:  http://localhost:8761/
- Spring Cloud Gateway: http://localhost:8090/solicitudes
- GitHub : https://github.com/oscar2349/nuevaEps
- Microservicio Solicitudes http://localhost:8888/solicitudes


## Comandos utiles

- levantar una instancia de un microservicio: ./mvnw spring-boot:run
- Levantar un compose: docker-compose up -d --build


