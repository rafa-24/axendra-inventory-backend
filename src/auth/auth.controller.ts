import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsuarioLoginDto } from 'src/empresas/dto/usuario.dto';

@Controller('auth')
export class AuthController {
    constructor( private authService: AuthService) {}


    @HttpCode(HttpStatus.OK)
    @Post('iniciar-sesion')
    async signIn(@Body() loginDto: UsuarioLoginDto) {
        const {email, password} = loginDto
        return await this.authService.signIn(email, password);
    }
}
