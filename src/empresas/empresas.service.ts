import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Negocio } from './entity/empresa.entity';
import { Repository } from 'typeorm';
import { NegocioInterface } from './interface/negocio.interface';
import { Usuario } from './entity/usuario.entity';

@Injectable()
export class EmpresasService {
    constructor(
        @InjectRepository(Negocio)
        private negocioRepository: Repository<Negocio>,
        @InjectRepository(Usuario)
        private usuarioRepository: Repository<Usuario>,
    ) { }

    async findAll(): Promise<any> {
        try {
            return await this.negocioRepository.find();

        } catch (error) {
            console.log('Ocurrio un error', error);
            return error;
        }

    }

    // Registro negocio
    async registro(negocioData: NegocioInterface): Promise<any> {
        try {
            // Crear y guardar el nuevo negocio
            const dataNegocio = this.negocioRepository.create(negocioData);
            const newNegocio: any = await this.negocioRepository.save(dataNegocio);

            console.log('Negocio creado:', newNegocio);

            // Crear el usuario asociado
            const newUser = this.usuarioRepository.create({
                email: negocioData.email,
                password: negocioData.password, // Asegúrate de que este campo esté en negocioData
                fk_negocio: newNegocio.id_negocio, // Usa el ID del nuevo negocio si corresponde
            });

            const usuarioCreado = await this.usuarioRepository.save(newUser);
            console.log('Usuario creado:', usuarioCreado);

            return {
                success: true,
                message: 'Negocio y usuario creados satisfactoriamente',
            };

        } catch (error) {
            console.error('Ocurrió un error al registrar negocio y usuario', error);
            return {
                success: false,
                message: 'Error al registrar negocio y usuario: ' + error.message,
            };
        }
    }

    /* Buscar usuario */

    async findOne(email: string): Promise<any> {
        try {
            const user = await this.usuarioRepository.findOneBy({email: email});
            return user;            
        } catch (error) {
            console.error('Este usuario no existe', error);
        }
    }
}
