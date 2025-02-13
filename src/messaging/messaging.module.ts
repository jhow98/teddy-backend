import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { MessagingService } from './messaging.service';
import { MessagingProcessor } from './messaging.processor';
import { ConfigModule, ConfigService } from '@nestjs/config';

ConfigModule.forRoot();
@Module({
  imports: [
    BullModule.registerQueueAsync({
      name: 'clientesQueue',
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        redis: {
          host: configService.get('REDIS_HOST'),
          port: configService.get('REDIS_PORT'),
          password: configService.get('REDIS_PASS'),
          tls: {},
        },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [MessagingService, MessagingProcessor],
  exports: [MessagingService],
  
})
export class MessagingModule {}
