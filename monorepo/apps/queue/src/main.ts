import { NestFactory } from '@nestjs/core';
import { QueueingModule } from './queueing.module';

async function bootstrap() {
  const app = await NestFactory.create(QueueingModule);
  await app.listen(3000);
}
bootstrap();
