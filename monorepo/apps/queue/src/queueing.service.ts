import { Injectable } from '@nestjs/common';

@Injectable()
export class QueueingService {
  getHello(): string {
    return 'Hello World!';
  }
}
