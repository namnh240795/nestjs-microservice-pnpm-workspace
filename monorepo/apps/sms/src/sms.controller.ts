import { Controller } from '@nestjs/common';
import { SmsService } from './sms.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { SMS_COMMAND } from '@namnh240795/events';

@Controller()
export class SmsController {
  constructor(private readonly smsService: SmsService) {}

  @MessagePattern({ cmd: SMS_COMMAND.SEND })
  addToQueue(@Payload() data: any) {
    return this.smsService.addToQueue(data);
  }

  @MessagePattern({ cmd: SMS_COMMAND.TRIGGER_SEND })
  send(@Payload() data: any) {
    return this.smsService.sendSms(data);
  }
}
