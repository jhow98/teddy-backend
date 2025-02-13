import { Test, TestingModule } from '@nestjs/testing';
import { MessagingService } from './messaging.service';
import { getQueueToken } from '@nestjs/bull';

describe('MessagingService', () => {
  let service: MessagingService;
  let queueMock: { add: jest.Mock };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MessagingService,
        {
          provide: getQueueToken('clientesQueue'),
          useValue: {
            add: jest.fn(),
          },
        },
      ],
    }).compile();
  
    service = module.get<MessagingService>(MessagingService);
    queueMock = module.get(getQueueToken('clientesQueue'));
  });
  

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should add a job to the queue', async () => {
    await service.enviarMensagem('novoCliente', { nome: 'Jhonatan' });
  
    expect(queueMock.add).toHaveBeenCalledWith('novoCliente', { nome: 'Jhonatan' }, { attempts: 3 });
  });
  
});
