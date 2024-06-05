import { Module } from '@nestjs/common';
import { HealthcheckService } from './healthcheck.service';
import { healthcheckController } from './healthcheck.controller';

@Module({
  providers: [HealthcheckService],
  controllers: [healthcheckController],
})
export class HealthcheckModule {}
