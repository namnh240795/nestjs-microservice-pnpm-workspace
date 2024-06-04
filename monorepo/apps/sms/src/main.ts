import { NestFactory } from '@nestjs/core';
import { SmsModule } from './sms.module';

async function bootstrap() {
  const app = await NestFactory.create(SmsModule);
  await app.listen(3000);
}
bootstrap();
