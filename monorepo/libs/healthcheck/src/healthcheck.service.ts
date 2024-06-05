import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthcheckService {
  getHealthcheck() {
    return { message: 'OK' };
  }
}
