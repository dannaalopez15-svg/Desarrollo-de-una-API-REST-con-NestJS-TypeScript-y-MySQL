import { Controller, Get, Post, Body } from '@nestjs/common';
import { DocenteService } from './docente.service';

@Controller('docentes')
export class DocenteController {
  constructor(private readonly docenteService: DocenteService) {}

  // GET /docentes: consultar todos los docentes registrados
  @Get()
  async findAll() {
    return await this.docenteService.findAll();
  }

  // POST /docentes: registrar un nuevo docente
  @Post()
  async create(@Body() createDocenteDto: any) {
    return await this.docenteService.create(createDocenteDto);
  }
}