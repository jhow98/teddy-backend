import { Injectable, NotFoundException } from '@nestjs/common';
import { ClienteRepository } from '../repositories/cliente.repository';
import { Cliente } from '../entities/cliente.entity';
import { CreateClienteDto } from '../dto/create-cliente.dto';

@Injectable()
export class ClienteService {
  constructor(private readonly clienteRepo: ClienteRepository) {}

  async criar(createClienteDto: CreateClienteDto): Promise<Cliente> {
    const cliente = new Cliente();
    cliente.nome = createClienteDto.nome;
    cliente.salario = createClienteDto.salario;
    cliente.valorEmpresa = createClienteDto.valorEmpresa;

    return await this.clienteRepo.criar(cliente);
  }

  async buscarTodos(pagina = 1, limite = 16) {
    const [clientes, total] = await Promise.all([
      this.clienteRepo.buscarTodos(pagina, limite),
      this.clienteRepo.contarTotal(),
    ]);
    return { clientes, total };
  }

  async buscarPorId(id: number): Promise<Cliente> {
    const cliente = await this.clienteRepo.buscarPorId(id);
    if (!cliente) throw new NotFoundException('Cliente não encontrado');
    return cliente;
  }

  async atualizar(id: number, cliente: Partial<Cliente>): Promise<void> {
    await this.buscarPorId(id);
    await this.clienteRepo.atualizar(id, cliente);
  }

  async deletar(id: number): Promise<void> {
    await this.buscarPorId(id);
    await this.clienteRepo.deletar(id);
  }
}
