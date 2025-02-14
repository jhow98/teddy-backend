import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { ExpressAdapter } from '@bull-board/express';
import { createBullBoard } from '@bull-board/api';
import { Queue } from 'bull';
import { MessagingProcessor } from './messaging.processor';
import { INestApplication } from '@nestjs/common';
import { BullAdapter } from '@bull-board/api/bullAdapter';


@Module({
  imports: [
    BullModule.registerQueue({
      name: 'clientesQueue',
    }),
  ],
  providers: [MessagingProcessor],
})
export class BullBoardModule {
  static setupBullBoard(app: INestApplication, queues: Queue[]) {
    const serverAdapter = new ExpressAdapter();
    serverAdapter.setBasePath('/bull-board');

    createBullBoard({
      queues: queues.map(queue => new BullAdapter(queue)),
      serverAdapter,
    });

    app.use('/bull-board', serverAdapter.getRouter());
  }
}
