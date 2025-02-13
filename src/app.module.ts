import { Module } from '@nestjs/common';
import { ClienteModule } from './modules/clientes/cliente.module';
import { DatabaseModule } from './database/database.module';


import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagingModule } from './messaging/messaging.module';

@Module({
  imports: [DatabaseModule, ClienteModule, MessagingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
