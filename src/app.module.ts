import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AsignaturaController } from './asignatura/asignatura.controller';
import { DocenteController } from './docente/docente.controller';
import { DocenteService } from './docente/docente.service';
import { AsignaturaService } from './asignatura/asignatura.service';

@Module({
  imports: [],
  controllers: [AppController, AsignaturaController, DocenteController],
  providers: [AppService, DocenteService, AsignaturaService],
})
export class AppModule {}
