import { Controller, Get } from '@nestjs/common';
import { QueueingService } from './queueing.service';

@Controller()
export class QueueingController {
  constructor(private readonly queueingService: QueueingService) {}

  @Get()
  getHello(): string {
    return this.queueingService.getHello();
  }
}
