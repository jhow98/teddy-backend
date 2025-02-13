import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigModule, ConfigService } from '@nestjs/config';

ConfigModule.forRoot();

const configService = new ConfigService();
console.log('🔍 Banco de Dados Configuração:');
console.log('DB_HOST:', configService.get('DB_HOST'));
console.log('DB_PORT:', configService.get('DB_PORT'));
console.log('DB_USER:', configService.get('DB_USER'));
console.log('DB_PASS:', configService.get('DB_PASS'));
console.log('DB_NAME:', configService.get('DB_NAME'));

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuração do Swagger
  const config = new DocumentBuilder()
    .setTitle('API de Clientes')
    .setDescription('Documentação da API do painel administrativo')
    .setVersion('1.0')
    .addTag('clientes') // Adiciona tags para organização dos endpoints
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(3000);
}
bootstrap();
