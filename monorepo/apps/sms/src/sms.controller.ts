import { Controller, Get } from '@nestjs/common';
import { SmsService } from './sms.service';

@Controller()
export class SmsController {
  constructor(private readonly smsService: SmsService) {}

  @Get()
  getHello(): string {
    return this.smsService.getHello();
  }
}
