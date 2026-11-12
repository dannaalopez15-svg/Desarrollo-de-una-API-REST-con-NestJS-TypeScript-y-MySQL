DROP DATABASE IF EXISTS gestion_academica;
-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS gestion_academica;
USE gestion_academica;

-- Crear tabla Docentes
CREATE TABLE docentes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    profesion VARCHAR(100) NOT NULL
);

-- Crear tabla Asignaturas 
CREATE TABLE asignaturas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_asignatura VARCHAR(100) NOT NULL,
    creditos INT NOT NULL,
    docente_id INT NOT NULL,
    CONSTRAINT fk_docente_asignatura 
        FOREIGN KEY (docente_id) 
        REFERENCES docentes(id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Insertar registros  Docentes
INSERT INTO docentes (nombre, apellido, email, profesion) VALUES 
('Brayan', 'Alejandro', 'BrayanBlejandro1234@gmail.com', 'Ingeniero de Sistemas'),
('Danna', 'Lopez', 'dannalopez@gmail.com', 'Matemática');

-- Insertar registros Asignaturas
INSERT INTO asignaturas (nombre_asignatura, creditos, docente_id) VALUES 
('Bases de Datos I', 4, 1),
('Álgebra Lineal', 3, 2);

SELECT * FROM docentes;
SELECT * FROM asignaturas;