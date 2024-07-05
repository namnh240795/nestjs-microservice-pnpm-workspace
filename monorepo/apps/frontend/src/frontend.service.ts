import { Injectable } from '@nestjs/common';

@Injectable()
export class FrontendService {
  getHello(): string {
    return 'Hello World!';
  }
}
