import { Module } from '@nestjs/common';
import { SmsController } from './sms.controller';
import { SmsService } from './sms.service';
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
      name: 'sms_queue',
    }),
  ],
  controllers: [SmsController],
  providers: [SmsService],
})
export class SmsModule {}
