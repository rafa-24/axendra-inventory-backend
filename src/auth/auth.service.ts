import { Injectable, UnauthorizedException } from '@nestjs/common';
import { EmpresasService } from 'src/empresas/empresas.service';
import { UsuarioInterface } from 'src/empresas/interface/usuario.interface';


@Injectable()
export class AuthService {
    constructor(private empresaService: EmpresasService) {}

    async signIn(email: string, pass: string): Promise<any> {
        const user: UsuarioInterface = await this.empresaService.findOne(email);

        if(user?.password !== pass) {
            return {
                data: null,
                message: 'Error al iniciar sesion'
            }
        }

        const {password, ...result} = user;
        return {
            data: result,
            message: 'Inicio de sesion exitoso'
        }
    }
}
