CREATE DATABASE IF NOT EXISTS db_medicamentos;
USE db_medicamentos;

DROP TABLE IF EXISTS solicitudes;
DROP TABLE IF EXISTS medicamentos;
DROP TABLE IF EXISTS usuarios;

CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE medicamentos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  es_no_pos BOOLEAN NOT NULL,
  cantidad INT DEFAULT 0
);

CREATE TABLE solicitudes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  usuario_id INT NOT NULL,
  medicamento_id INT NOT NULL,
  numero_orden VARCHAR(100),
  direccion TEXT,
  telefono VARCHAR(20),
  correo VARCHAR(100),
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
  FOREIGN KEY (medicamento_id) REFERENCES medicamentos(id)
);

-- Insertar usuarios (con contraseñas hash dummy)
INSERT INTO usuarios (nombre, email, password) VALUES
('Ana Pérez', 'ana@example.com', '$2a$10$abcdefghij1234567890'), 
('Carlos López', 'carlos@example.com', '$2a$10$abcdefghij1234567890'),
('María Díaz', 'maria@example.com', '$2a$10$abcdefghij1234567890'),
('Luis Torres', 'luis@example.com', '$2a$10$abcdefghij1234567890'),
('Paula Ruiz', 'paula@example.com', '$2a$10$abcdefghij1234567890'),
('José García', 'jose@example.com', '$2a$10$abcdefghij1234567890'),
('Lucía Fernández', 'lucia@example.com', '$2a$10$abcdefghij1234567890'),
('Andrés Ramírez', 'andres@example.com', '$2a$10$abcdefghij1234567890'),
('Laura Herrera', 'laura@example.com', '$2a$10$abcdefghij1234567890'),
('Diego Martínez', 'diego@example.com', '$2a$10$abcdefghij1234567890');

-- Insertar medicamentos con stock
INSERT INTO medicamentos (nombre, es_no_pos, cantidad) VALUES
('Paracetamol', FALSE, 200),
('Ibuprofeno', FALSE, 150),
('Metformina', FALSE, 100),
('Losartán', FALSE, 80),
('Omeprazol', FALSE, 120),
('Adalimumab', TRUE, 20),
('Rituximab', TRUE, 10),
('Etanercept', TRUE, 15),
('Trastuzumab', TRUE, 5),
('Nivolumab', TRUE, 8);

-- Insertar solicitudes
INSERT INTO solicitudes (usuario_id, medicamento_id, numero_orden, direccion, telefono, correo) VALUES
(1, 1, 'O12345', 'Calle 12 # 30-25', '3001112233', 'maria@example.com'),
(2, 2, 'MA12345', 'Calle 13 # 52 -16', '3001112233', 'maria2@example.com'),
(3, 6, 'OT12345', 'Calle 123 # 47 44', '3001112233', 'maria3@example.com'),
(4, 7, 'TP54321', 'Carrera 45', '3102223344', 'luis@example.com'),
(5, 3, 'OSM12345', 'Calle 123', '3001112233', 'mari@example.com'),
(6, 4, 'OTD12345', 'Calle 123', '3001112233', 'luz@example.com'),
(7, 8, 'OHH98765', 'Av 9 No. 22-55', '3205556677', 'lucia@example.com'),
(8, 5, 'OMR12345', 'Calle 123', '3001112233', 'maria@example.com'),
(9, 9, 'OTDD11223', 'Calle Falsa 123', '3104445566', 'laura@example.com'),
(10, 10, 'ORD99887', 'Diagonal 80', '3116677889', 'diego@example.com');
