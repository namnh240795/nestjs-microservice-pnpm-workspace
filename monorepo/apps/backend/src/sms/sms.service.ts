import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { SERVICE, SMS_COMMAND } from '@namnh240795/events';

@Injectable()
export class SmsService {
  constructor(@Inject(SERVICE.SMS) private client: ClientProxy) {}

  sendSMS() {
    console.log('service send');
    this.client
      .send({ cmd: SMS_COMMAND.SEND }, { data: 'Hello' })
      .subscribe(() => {});
  }
}
