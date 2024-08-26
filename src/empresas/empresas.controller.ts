import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { EmpresasService } from './empresas.service';
import { NegocioDto } from './dto/negocio.dto';

@Controller('empresas')
export class EmpresasController {
    constructor(
        private negocioService: EmpresasService
    ) {}

    /* Registro empresa */
    @Post('registro')
    async register(@Body() dataNegocioDto: NegocioDto) {
        return await this.negocioService.registro(dataNegocioDto)
    }
}
