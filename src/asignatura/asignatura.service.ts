import { Injectable } from '@nestjs/common';
import { pool } from '../bd';

@Injectable()
export class AsignaturaService {
  async findAll() {
    try {
      const [rows] = await pool.query(`
        SELECT asignaturas.*, docentes.nombre AS docente_nombre, docentes.apellido AS docente_apellido 
        FROM asignaturas 
        JOIN docentes ON asignaturas.docente_id = docentes.id
      `);
      return rows;
    } catch (error:any) {
      throw new Error(`Error al consultar asignaturas: ${error.message}`);
    }
  }

  async create(createAsignaturaDto: any) {
    const { nombre_asignatura, creditos, docente_id } = createAsignaturaDto;
    try {
      const [result]: any = await pool.query(
        'INSERT INTO asignaturas (nombre_asignatura, creditos, docente_id) VALUES (?, ?, ?)',
        [nombre_asignatura, creditos, docente_id],
      );
      return {
        statusCode: 201,
        message: 'Asignatura registrada exitosamente',
        id: result.insertId,
      };
    } catch (error:any) {
      throw new Error(`Error al registrar asignatura (Verifique que el docente_id exista): ${error.message}`);
    }
  }
}