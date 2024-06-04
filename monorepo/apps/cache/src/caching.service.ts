import { Injectable } from '@nestjs/common';

@Injectable()
export class CachingService {
  getHello(): string {
    return 'Hello World!';
  }
}
