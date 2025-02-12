import { Test, TestingModule } from '@nestjs/testing';
import { ClienteService } from './cliente.service';
import { ClienteRepository } from '../repositories/cliente.repository';
import { Cliente } from '../entities/cliente.entity';


describe('ClienteService', () => {
  let service: ClienteService;
  let repository: ClienteRepository;

  const clienteMock = new Cliente();
  clienteMock.id = 1;
  clienteMock.nome = 'João';
  clienteMock.salario = 3500;
  clienteMock.valorEmpresa = 120000;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClienteService,
        {
          provide: ClienteRepository,
          useValue: {
            criar: jest.fn().mockResolvedValue(clienteMock),
            buscarTodos: jest.fn(),
            contarTotal: jest.fn(),
            buscarPorId: jest.fn(),
            atualizar: jest.fn(),
            deletar: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<ClienteService>(ClienteService);
    repository = module.get<ClienteRepository>(ClienteRepository);
  });

  it('deve criar um cliente', async () => {
    const result = await service.criar(clienteMock);
  
    expect(result).toEqual(clienteMock);
    expect(repository.criar).toHaveBeenCalledWith(expect.any(Cliente));
  });

  it('deve buscar todos os clientes', async () => {
    const clientesMock = [clienteMock];

    jest.spyOn(repository, 'buscarTodos').mockResolvedValue(clientesMock);
    jest.spyOn(repository, 'contarTotal').mockResolvedValue(1);

    const result = await service.buscarTodos(1, 16);
    expect(result).toEqual({ clientes: clientesMock, total: 1 });
  });

  it('deve buscar um cliente por ID', async () => {
    const clienteMock = { id: 1, nome: 'João', salario: 3500, valorEmpresa: 120000 };
    jest.spyOn(repository, 'buscarPorId').mockResolvedValue(clienteMock);

    const result = await service.buscarPorId(1);
    expect(result).toEqual(clienteMock);
  });

  it('deve lançar erro ao buscar cliente inexistente', async () => {
    jest.spyOn(repository, 'buscarPorId').mockResolvedValue(null);

    await expect(service.buscarPorId(99)).rejects.toThrowError('Cliente não encontrado');
  });

  it('deve atualizar um cliente', async () => {
    const clienteMock = { id: 1, nome: 'João', salario: 3500, valorEmpresa: 120000 };
    jest.spyOn(repository, 'buscarPorId').mockResolvedValue(clienteMock);
    jest.spyOn(repository, 'atualizar').mockResolvedValue();

    await service.atualizar(1, { nome: 'Novo Nome' });
    expect(repository.atualizar).toHaveBeenCalledWith(1, { nome: 'Novo Nome' });
  });

  it('deve deletar um cliente', async () => {
    const clienteMock = { id: 1, nome: 'João', salario: 3500, valorEmpresa: 120000 };
    jest.spyOn(repository, 'buscarPorId').mockResolvedValue(clienteMock);
    jest.spyOn(repository, 'deletar').mockResolvedValue();

    await service.deletar(1);
    expect(repository.deletar).toHaveBeenCalledWith(1);
  });
});
