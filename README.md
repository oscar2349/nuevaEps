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
### Levantar Base de Datos
- Ejecutar el Dockerfile de la carpeta "Database", para crear las tablas con data.
- Si se desea un Ejecutar el Docker-compose para tener un PHP My Admin como adminsitrador de BDD

### Levantar Microservicios
- Ejecutar el docker compose en la raiz de la carpeta para la creacion del backend y el front.

de esta manera se crea:
1. BD en MySQL con las tablas Pobladas - `initNew.sql`
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

## Script Pruebas Postman

- https://orange-sunset-9694.postman.co/workspace/PruebasNuevaEps~8ba53308-d745-41f4-8c64-0f62b99a413c/folder/8540308-438b6873-223f-47ad-82be-6fb7cbb2cf65?action=share&creator=8540308&ctx=documentation



