import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bullmq';

@Injectable()
export class MessagingService {
  constructor(@InjectQueue('clientesQueue') private clientesQueue: Queue) {}

  async enviarMensagem(tipo: string, cliente: any) {
    await this.clientesQueue.add(tipo, cliente, {
      attempts: 3,
    });
  
    console.log(`📩 Cliente enviado para a fila:`, cliente);
  }
  
}
