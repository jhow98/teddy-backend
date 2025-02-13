import { Module } from '@nestjs/common';
import { ClienteModule } from './modules/clientes/cliente.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';


import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagingModule } from './messaging/messaging.module';

@Module({
  imports: [DatabaseModule, ClienteModule, MessagingModule, ConfigModule.forRoot({
    isGlobal: true, // Isso permite que as variáveis sejam acessadas globalmente
  }),],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
