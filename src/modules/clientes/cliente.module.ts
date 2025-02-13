import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from './entities/cliente.entity';
import { ClienteRepository } from './repositories/cliente.repository';
import { ClienteService } from './services/cliente.service';
import { ClienteController } from './controllers/cliente.controller';
import { MessagingModule } from '../../messaging/messaging.module';
import { MetricsModule } from '../../common/metrics/metrics.module';
import { MessagingService } from '../../messaging/messaging.service';

@Module({
  imports: [TypeOrmModule.forFeature([Cliente]), MessagingModule, MetricsModule],
  controllers: [ClienteController],
  providers: [ClienteService, ClienteRepository, MessagingService],
  exports: [ClienteService],
})
export class ClienteModule {}
