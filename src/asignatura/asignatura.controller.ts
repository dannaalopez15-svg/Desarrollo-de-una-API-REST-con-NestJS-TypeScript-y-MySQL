import { Controller, Get, Post, Body } from '@nestjs/common';
import { AsignaturaService } from './asignatura.service';

@Controller('asignaturas')
export class AsignaturaController {
  constructor(private readonly asignaturaService: AsignaturaService) {}

  // GET /asignaturas: consultar todas las asignaturas registradas
  @Get()
  async findAll() {
    return await this.asignaturaService.findAll();
  }

  // POST /asignaturas: registrar una nueva asignatura asociada a un docente
  @Post()
  async create(@Body() createAsignaturaDto: any) {
    return await this.asignaturaService.create(createAsignaturaDto);
  }
}