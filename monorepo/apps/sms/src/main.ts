import { NestFactory } from '@nestjs/core';
import { SmsModule } from './sms.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    SmsModule,
    {
      transport: Transport.REDIS,
      options: {
        host: 'localhost',
        port: 6666,
      },
    },
  );
  await app.listen();
}
bootstrap();
