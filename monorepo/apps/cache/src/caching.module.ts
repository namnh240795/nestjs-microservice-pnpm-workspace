import { Module } from '@nestjs/common';
import { CachingController } from './caching.controller';
import { CachingService } from './caching.service';
import { HealthcheckModule } from '@namnh240795/healthcheck';

@Module({
  imports: [HealthcheckModule],
  controllers: [CachingController],
  providers: [CachingService],
})
export class CachingModule {}
