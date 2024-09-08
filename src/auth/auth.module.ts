import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { EmpresasModule } from 'src/empresas/empresas.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from "./constants";


@Module({
  imports: [
    EmpresasModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: {expiresIn: '3600s'}
    })
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
