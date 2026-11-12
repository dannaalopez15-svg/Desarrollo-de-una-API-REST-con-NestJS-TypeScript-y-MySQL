import { Injectable } from '@nestjs/common';
import { pool } from '../bd';

@Injectable()
export class DocenteService {
  async findAll() {
    try {
      const [rows] = await pool.query('SELECT * FROM docentes');
      return rows;
    } catch (error: any) {
      throw new Error(`Error al consultar docentes: ${error.message}`);
    }
  }

  async create(createDocenteDto: any) {
    const { nombre, apellido, email, profesion } = createDocenteDto;
    try {
      const [result]: any = await pool.query(
        'INSERT INTO docentes (nombre, apellido, email, profesion) VALUES (?, ?, ?, ?)',
        [nombre, apellido, email, profesion],
      );
      return {
        statusCode: 201,
        message: 'Docente registrado exitosamente',
        id: result.insertId,
      };
    } catch (error: any) {
      throw new Error(`Error al registrar docente: ${error.message}`);
    }
  }
}