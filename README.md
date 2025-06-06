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
- Auth0 
- Terraform

## Esquema Base de Datos gestion Medicamentos

1. Tabla usuarios
2. Tabla medicamentos
3. Tabla solicitudes

## Esquema Base de Datos gestion Roles y permisos

2. Tabla Roles
3. Tabla Usuarios Roles


## Módulos
- Autenticación (/auth)
- Roles y permisos de Ususario
- Api Gateway
- Eureka Server
- Solicitudes de medicamentos (`/solicitudes`)

## repositorio GitHub
- GitHub : https://github.com/oscar2349/nuevaEps

## Instrucciones
Ejecutar el Docker de la carpeta Database, para crear las tablas con data.
Ejecutar el docker compose para la creacion del backen y el front.

1. Ejecutar el docker compose para Crear BD en MySQL y poblar las tablas - `initNew.sql`
2. Levanta `Eureka`
3. Levanta `msvc-oauth`
4. Levanta `msvc.solicitudes`
5. Levanta `msvc-oauth`
6. Levanta `msvc-users`
7. Levanta `msvc-gateway-server`
8. Levanta `Front en angular`


## URLs Servicios

- Microservicios Solicitudes: http://localhost:8888 O http://localhost:{52781} Puerto Random
- Eureka Server:  http://localhost:8761/
- Spring Cloud Gateway: http://localhost:8090/solicitudes
- Microservicio Solicitudes http://localhost:8888/solicitudes
- Microservicios usuarios: http://localhost:57111  veriicar puerto, para la gestion de usuarios User-role
- Front en Angular: http://localhost:4200/


## Comandos utiles

- levantar una instancia de un microservicio: ./mvnw spring-boot:run
- Levantar un compose: docker-compose up -d --build
- Actualizar Repositorio remoto: git push -u origin main
- Arrancar Angular en local: ng serve -o




