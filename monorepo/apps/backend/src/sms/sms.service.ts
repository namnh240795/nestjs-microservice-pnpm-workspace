import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { SERVICE, SMS_COMMAND } from '@namnh240795/events';

@Injectable()
export class SmsService {
  constructor(@Inject(SERVICE.SMS) private client: ClientProxy) {}

  sendSMS() {
    try {
      this.client.send({ cmd: SMS_COMMAND.SEND }, { data: 'Hello' });
    } catch (error) {
      console.log('error', error);
    }
  }
}
