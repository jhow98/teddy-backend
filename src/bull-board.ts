import express from 'express';
import { createBullBoard } from '@bull-board/api';
import { BullMQAdapter } from '@bull-board/api/bullMQAdapter';
import { ExpressAdapter } from '@bull-board/express';
import { Queue } from 'bullmq';
import Redis from 'ioredis';

const redisConnection = new Redis({
  host: 'comic-leech-14421.upstash.io',
  port: 6379,
  password: 'AThVAAIjcDFlNTExYTYxZjhmNzE0ZjEzOTA4MTIzNTZlZGQyZDJhNnAxMA',
  tls: {},
});

const queue = new Queue('clientesQueue', { connection: redisConnection });

const serverAdapter = new ExpressAdapter();
serverAdapter.setBasePath('/admin/queues');

createBullBoard({
  queues: [new BullMQAdapter(queue)],
  serverAdapter,
});

const app = express();
app.use('/admin/queues', serverAdapter.getRouter());

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`🚀 Bull Board rodando em http://localhost:${PORT}/admin/queues`);
});
