import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bullmq';

@Processor('clientesQueue')
export class MessagingProcessor {
  @Process('novoCliente')
  async handleNovoCliente(job: Job<any>) {
    console.log(`Processando novo cliente: ${JSON.stringify(job.data)}`);
  }
}