import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

ConfigModule.forRoot();

const configService = new ConfigService();
console.log('🔍 Banco de Dados Configuração:');
console.log('DB_HOST:', configService.get('DB_HOST'));
console.log('DB_PORT:', configService.get('DB_PORT'));
console.log('DB_USER:', configService.get('DB_USER'));
console.log('DB_PASS:', configService.get('DB_PASS'));
console.log('DB_NAME:', configService.get('DB_NAME'));
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: configService.get('DB_HOST'),
      port: configService.get('DB_PORT'),
      username: configService.get('DB_USER'),
      password: configService.get('DB_PASS'),
      database: configService.get('DB_NAME'),
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
  exports: [TypeOrmModule],
})
export class DatabaseModule {}
