import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from './entities/cliente.entity';
import { ClienteRepository } from './repositories/cliente.repository';
import { ClienteService } from './services/cliente.service';
import { ClienteController } from './controllers/cliente.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Cliente])],
  controllers: [ClienteController],
  providers: [ClienteService, ClienteRepository],
  exports: [ClienteService],
})
export class ClienteModule {}
