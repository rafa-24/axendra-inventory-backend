import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { DataSource } from 'typeorm';
import { EmpresasModule } from './empresas/empresas.module';
import { Negocio } from './empresas/entity/empresa.entity';
import { Usuario } from './empresas/entity/usuario.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'b3je1hsgkpmeefezo5qd-mysql.services.clever-cloud.com',
      port: 3306,
      username: 'ugzalskw2q8vsoi7',
      password: '7ds0g1b1VkvmTbqFa3N8',
      database: 'b3je1hsgkpmeefezo5qd',
      entities: [Negocio,Usuario],
      synchronize: true
    }),
    AuthModule,
    EmpresasModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
