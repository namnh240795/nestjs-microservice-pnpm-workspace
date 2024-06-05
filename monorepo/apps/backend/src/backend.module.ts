import { Module } from '@nestjs/common';
import { RegistrationModule } from './registration/registration.module';
import { HealthcheckModule } from '@namnh240795/healthcheck';

@Module({
  imports: [HealthcheckModule, RegistrationModule],
  controllers: [],
  providers: [],
})
export class BackendModule {}
