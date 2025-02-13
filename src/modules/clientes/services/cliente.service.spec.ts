import { Test, TestingModule } from '@nestjs/testing';
import { ClienteService } from './cliente.service';
import { ClienteRepository } from '../repositories/cliente.repository';
import { MessagingService } from '../../../messaging/messaging.service';

describe('ClienteService', () => {
  let service: ClienteService;
  let clienteRepo: { 
    buscarTodos: jest.Mock; 
    contarTotal: jest.Mock; 
    buscarPorId: jest.Mock;
    criar: jest.Mock;
    atualizar: jest.Mock;
    deletar: jest.Mock;
  };
  let messagingService: { enviarMensagem: jest.Mock };

  beforeEach(async () => {
    clienteRepo = {
      buscarTodos: jest.fn().mockResolvedValue([{ id: 1, nome: 'João', salario: 3500, valorEmpresa: 120000 }]),
      contarTotal: jest.fn().mockResolvedValue(1),
      buscarPorId: jest.fn().mockResolvedValue({ id: 1, nome: 'João', salario: 3500, valorEmpresa: 120000 }),
      criar: jest.fn().mockResolvedValue({ id: 1, nome: 'João', salario: 3500, valorEmpresa: 120000 }),
      atualizar: jest.fn().mockResolvedValue(undefined),
      deletar: jest.fn().mockResolvedValue(Promise.resolve(true)),
    };

    messagingService = {
      enviarMensagem: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClienteService,
        { provide: ClienteRepository, useValue: clienteRepo },
        { provide: MessagingService, useValue: messagingService },
      ],
    }).compile();

    service = module.get<ClienteService>(ClienteService);
  });

  it('deve buscar todos os clientes', async () => {
    const result = await service.buscarTodos(1, 16);
    expect(result).toEqual({
      clientes: [{ id: 1, nome: 'João', salario: 3500, valorEmpresa: 120000 }],
      total: 1,
    });
  });

  it('deve buscar um cliente por ID', async () => {
    const result = await service.buscarPorId(1);
    expect(result).toEqual({ id: 1, nome: 'João', salario: 3500, valorEmpresa: 120000 });
  });

  it('deve criar um cliente', async () => {
    const clienteMock = { nome: 'João', salario: 3500, valorEmpresa: 120000 };
    const result = await service.criar(clienteMock);
    expect(result).toEqual({ id: 1, ...clienteMock });
  });

  it('deve atualizar um cliente', async () => {
    const clienteMock = { nome: 'João', salario: 3500, valorEmpresa: 120000 };
    const result = await service.atualizar(1, clienteMock);
    expect(result).toEqual({ id: 1, ...clienteMock });
  });

  it('deve deletar um cliente', async () => {
    const result = await service.deletar(1);
    expect(result).toBe(true);
  });

  it('deve lançar erro ao buscar cliente inexistente', async () => {
    clienteRepo.buscarPorId.mockResolvedValue(null);
    await expect(service.buscarPorId(999)).rejects.toThrow();
  });
});
