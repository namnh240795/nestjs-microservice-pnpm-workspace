import { NestFactory } from '@nestjs/core';
import { MailingModule } from './mailing.module';

async function bootstrap() {
  const app = await NestFactory.create(MailingModule);
  await app.listen(3000);
}
bootstrap();
