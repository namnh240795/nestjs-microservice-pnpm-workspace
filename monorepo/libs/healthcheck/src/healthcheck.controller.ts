import { Controller, Get } from '@nestjs/common';
import { ApiProperty, ApiResponse, ApiTags } from '@nestjs/swagger';
import { HealthcheckService } from './healthcheck.service';

class HealthcheckRes {
  @ApiProperty({ description: 'Healthcheck message' })
  message: string;
}

@ApiTags('health-check')
@Controller('healthcheck')
export class healthcheckController {
  constructor(private readonly healthCheckService: HealthcheckService) {}

  @Get()
  @ApiResponse({ status: 200, type: HealthcheckRes })
  getHealthCheck(): HealthcheckRes {
    return this.healthCheckService.getHealthcheck();
  }
}
