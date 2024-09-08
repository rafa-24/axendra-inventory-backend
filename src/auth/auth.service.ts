import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { EmpresasService } from 'src/empresas/empresas.service';
import { UsuarioInterface } from 'src/empresas/interface/usuario.interface';


@Injectable()
export class AuthService {
    constructor(
        private empresaService: EmpresasService,
        private jwtService: JwtService
    ) {}

    async signIn(email: string, pass: string): Promise<any> {
        const user: UsuarioInterface = await this.empresaService.findOne(email);

        if(user?.password !== pass) {
            return {
                data: null,
                message: 'Error al iniciar sesion'
            }
        }
        const {password, ...result} = user;
        const payload = {sub: user.id_usuario, userEmail: user.email};
        const accessToken = await this.jwtService.signAsync(payload);
        return {
            token: accessToken,
            data: result,
            message: 'Inicio de sesion exitoso'
        }
    }
}