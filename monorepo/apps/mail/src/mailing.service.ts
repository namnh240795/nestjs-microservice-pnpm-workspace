import { Injectable } from '@nestjs/common';

@Injectable()
export class MailingService {
  getHello(): string {
    return 'Hello World!';
  }
}
