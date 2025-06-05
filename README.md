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
- BcryptPassword

## Esquema Base de Datos gestion Medicamentos

Eureka Server 
1. Tabla usuarios
2. Tabla medicamentos
3. Tabla solicitudes

## Esquema Base de Datos gestion Roles y permisos
2. Tabla Roles
3. Tabla Usuarios Roles


## Módulos
- Autenticación (`/auth`)
- Solicitudes de medicamentos (`/solicitudes`)

## repositorio GitHub
- GitHub : https://github.com/oscar2349/nuevaEps

## Instrucciones
1. Crear BD en MySQL con `schema.sql`
2. Levantar `auth-service`
3. Levantar `solicitudes-service`
4. Levantar Angular App (`ng serve`)


## URLs Servicios

- Microservicios Solicitudes: http://localhost:8888 O http://localhost:{52781} Puerto Random
- Eureka Server:  http://localhost:8761/
- Spring Cloud Gateway: http://localhost:8090/solicitudes
- Microservicio Solicitudes http://localhost:8888/solicitudes
- Microservicios usuarios: http://localhost:57111  veriicar puerto, para la gestion de usuarios User-role


## Comandos utiles

- levantar una instancia de un microservicio: ./mvnw spring-boot:run
- Levantar un compose: docker-compose up -d --build
- Actualizar Repositorio remoto: git push -u origin main


