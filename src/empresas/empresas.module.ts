import { Module } from '@nestjs/common';
import { EmpresasController } from './empresas.controller';
import { EmpresasService } from './empresas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Negocio } from './entity/empresa.entity';
import { Usuario } from './entity/usuario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Negocio, Usuario])],
  controllers: [EmpresasController],
  providers: [EmpresasService],
  exports: [EmpresasService]
})
export class EmpresasModule {}
