import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { MessagingService } from './messaging.service';
import { MessagingProcessor } from './messaging.processor';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'clientesQueue',
      redis: {
        host: 'comic-leech-14421.upstash.io',
        port: 6379,
        password: 'AThVAAIjcDFlNTExYTYxZjhmNzE0ZjEzOTA4MTIzNTZlZGQyZDJhNnAxMA',
        tls: {},
      },
    }),
  ],
  providers: [MessagingService, MessagingProcessor],
  exports: [MessagingService],
})
export class MessagingModule {}
