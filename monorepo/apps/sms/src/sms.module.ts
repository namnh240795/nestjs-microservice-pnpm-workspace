import { SmsController } from './sms.controller';
import { SmsService } from './sms.service';
import { BullModule } from '@nestjs/bull';
import { QUEUE, SERVICE } from '@namnh240795/events';
import { SmsConsumer } from './sms.consumer';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule,
    ClientsModule.register([
      {
        name: SERVICE.SMS,
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
      name: QUEUE.SMS,
    }),
  ],
  controllers: [SmsController],
  providers: [SmsService, SmsConsumer],
})
export class SmsModule {}
