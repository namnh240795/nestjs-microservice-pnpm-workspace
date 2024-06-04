import { Controller, Get } from '@nestjs/common';
import { CachingService } from './caching.service';

@Controller()
export class CachingController {
  constructor(private readonly cachingService: CachingService) {}

  @Get()
  getHello(): string {
    return this.cachingService.getHello();
  }
}
