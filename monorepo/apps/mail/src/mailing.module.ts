import { Module } from '@nestjs/common';
import { MailingController } from './mailing.controller';
import { MailingService } from './mailing.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { BullModule } from '@nestjs/bull';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SMS_SERVICE',
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
      name: 'mail_queue',
    }),
  ],
  controllers: [MailingController],
  providers: [MailingService],
})
export class MailingModule {}
