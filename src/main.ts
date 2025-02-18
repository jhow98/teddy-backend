import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { BullBoardModule } from './messaging/bull-board.module';
import { MyLoggerService } from './common/logger/logger.service';
import { PrometheusController } from '@willsoto/nestjs-prometheus';
import { getQueueToken } from '@nestjs/bull';

import { Queue } from 'bull';

import { Logger } from '@nestjs/common';

ConfigModule.forRoot();

const configService = new ConfigService();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'error', 'warn', 'debug'],
    });

    const queue = app.get<Queue>(getQueueToken('clientesQueue'));
    BullBoardModule.setupBullBoard(app, [queue]);



  // Configuração do Swagger
  const config = new DocumentBuilder()
    .setTitle('API de Clientes')
    .setDescription('Documentação da API do painel administrativo')
    .setVersion('1.0')
    .addTag('clientes')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  
  // Expor métricas na URL /metrics
  app.enableCors();
  app.enableShutdownHooks();

    if (process.env.NOW_REGION) {
        const server = createServer((req, res) => app.getHttpAdapter().getInstance().handle(req, res));
        server.listen(3000);
    } else {
        await app.listen(3000);
    }
}
bootstrap();
