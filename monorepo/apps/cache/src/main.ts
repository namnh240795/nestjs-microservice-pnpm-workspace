import { NestFactory } from '@nestjs/core';
import { CachingModule } from './caching.module';

async function bootstrap() {
  const app = await NestFactory.create(CachingModule);
  await app.listen(3000);
}
bootstrap();
