import { NestFactory } from '@nestjs/core';
import { MailingModule } from './mailing.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    MailingModule,
    {
      transport: Transport.TCP,
      options: {
        host: 'localhost',
        port: 6666,
      },
    },
  );
  await app.listen();
}
bootstrap();
