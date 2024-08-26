export interface UsuarioInterface {
    id_usuario: number;

    email: string;

    password: string;

    fk_negocio: number;
}