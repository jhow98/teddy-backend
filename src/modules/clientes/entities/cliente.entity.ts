import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('clientes')
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  nome: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  salario: number;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  valorEmpresa: number;
}
