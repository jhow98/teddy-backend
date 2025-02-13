import { Injectable, NotFoundException } from '@nestjs/common';
import { ClienteRepository } from '../repositories/cliente.repository';
import { Cliente } from '../entities/cliente.entity';
import { CreateClienteDto } from '../dto/create-cliente.dto';
import { MessagingService } from '../../../messaging/messaging.service';
import { MetricsService } from '../../../common/metrics/metrics.service';

@Injectable()
export class ClienteService {
  constructor(
    private readonly clienteRepo: ClienteRepository,
    private readonly messagingService: MessagingService,
    private readonly metricsService: MetricsService, // Injetando métricas
  ) {}
  async criar(createClienteDto: CreateClienteDto): Promise<Cliente> {
    const cliente = new Cliente();
    cliente.nome = createClienteDto.nome;
    cliente.salario = createClienteDto.salario;
    cliente.valorEmpresa = createClienteDto.valorEmpresa;

    const novoCliente = await this.clienteRepo.criar(cliente);
    this.metricsService.incrementarClientesCriados(); // Atualiza a métrica
    await this.messagingService.enviarMensagem('novoCliente', novoCliente);
    return novoCliente;

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

  async atualizar(id: number, cliente: Partial<Cliente>): Promise<Cliente> {
    await this.buscarPorId(id);
    await this.clienteRepo.atualizar(id, cliente);
    return { id, ...cliente } as Cliente;
  }
  

  async deletar(id: number): Promise<boolean> {
    await this.buscarPorId(id);
    await this.clienteRepo.deletar(id);
    return true;
  }
  
}
