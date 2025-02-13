import { Module } from '@nestjs/common';
import { ClienteModule } from './modules/clientes/cliente.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { MetricsModule } from './common/metrics/metrics.module';
import { MetricsService } from './common/metrics/metrics.service';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessagingModule } from './messaging/messaging.module';

@Module({
  imports: [DatabaseModule, ClienteModule, MessagingModule, MetricsModule, ConfigModule.forRoot({
    isGlobal: true,
  }),],
  controllers: [AppController],
  providers: [AppService, MetricsService],
  exports: [MetricsService],
})
export class AppModule {}
