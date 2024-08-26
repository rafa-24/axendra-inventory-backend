import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { EmpresasModule } from 'src/empresas/empresas.module';


@Module({
  imports: [EmpresasModule],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
