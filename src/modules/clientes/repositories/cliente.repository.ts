import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Cliente } from '../entities/cliente.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ClienteRepository {
  constructor(
    @InjectRepository(Cliente)
    private readonly clienteRepo: Repository<Cliente>,
  ) {}

  async criar(cliente: Cliente): Promise<Cliente> {
    const novoCliente = this.clienteRepo.create(cliente);
    return await this.clienteRepo.save(novoCliente);
  }

  async buscarTodos(pagina: number, limite: number): Promise<Cliente[]> {
    return await this.clienteRepo.find({
      skip: (pagina - 1) * limite,
      take: limite,
    });
  }

  async contarTotal(): Promise<number> {
    return await this.clienteRepo.count();
  }

  async buscarPorId(id: number): Promise<Cliente | null> {
    return await this.clienteRepo.findOneBy({ id });
  }

  async atualizar(id: number, cliente: Partial<Cliente>): Promise<void> {
    await this.clienteRepo.update(id, cliente);
  }

  async deletar(id: number): Promise<void> {
    await this.clienteRepo.delete(id);
  }
}
