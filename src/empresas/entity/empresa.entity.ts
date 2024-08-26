import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('negocio')
export class Negocio {
  @PrimaryGeneratedColumn()
  id_negocio: number;

  @Column()
  nombre_negocio: string;

  @Column()
  nombre: string;

  @Column()
  apellidos: string;

  @Column()
  telefono: string;

  @Column()
  cargo: string;

  @Column()
  email: string;

  @Column()
  password: string;
}