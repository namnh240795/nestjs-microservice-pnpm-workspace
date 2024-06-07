import { NestFactory } from '@nestjs/core';
import { SmsModule } from './sms.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { SERVICE } from '@namnh240795/events';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    SmsModule,
    {
      transport: Transport.REDIS,
      options: {
        host: 'localhost',
        port: 6666,
        name: SERVICE.SMS,
      },
    },
  );
  await app.listen();
}
bootstrap();
