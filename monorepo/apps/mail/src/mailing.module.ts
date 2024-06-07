import { Module } from '@nestjs/common';
import { MailingController } from './mailing.controller';
import { MailingService } from './mailing.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { BullModule } from '@nestjs/bull';
import { SERVICE } from '@namnh240795/events/service';
import { QUEUE } from '@namnh240795/events/queue';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SERVICE.MAIL,
        transport: Transport.REDIS,
        options: {
          host: 'localhost',
          port: 6666,
        },
      },
    ]),
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 6666,
      },
    }),
    BullModule.registerQueue({
      name: QUEUE.MAIL,
    }),
  ],
  controllers: [MailingController],
  providers: [MailingService],
})
export class MailingModule {}
