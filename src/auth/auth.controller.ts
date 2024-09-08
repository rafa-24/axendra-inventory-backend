import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsuarioLoginDto } from 'src/empresas/dto/usuario.dto';
import { AuthGuard } from './guard/auth.guard';

@Controller('auth')
export class AuthController {
    constructor( private authService: AuthService) {}


    @HttpCode(HttpStatus.OK)
    @Post('iniciar-sesion')
    async signIn(@Body() loginDto: UsuarioLoginDto) {
        const {email, password} = loginDto
        return await this.authService.signIn(email, password);
    }

    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }


}
