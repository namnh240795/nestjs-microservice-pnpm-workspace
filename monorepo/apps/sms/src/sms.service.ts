import { Injectable } from '@nestjs/common';

@Injectable()
export class SmsService {
  getHello(): string {
    return 'Hello World!';
  }
}
