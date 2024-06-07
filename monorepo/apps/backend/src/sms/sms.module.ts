import { Module } from '@nestjs/common';
import { SmsService } from './sms.service';
import { SmsController } from './sms.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { SERVICE } from '@namnh240795/events';

@Module({
  imports: [
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
  ],
  controllers: [SmsController],
  providers: [SmsService],
})
export class SmsModule {}
