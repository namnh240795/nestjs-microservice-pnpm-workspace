import { Module } from '@nestjs/common';
import { RegistrationModule } from './registration/registration.module';
import { HealthcheckModule } from '@namnh240795/healthcheck';
import { PrismaModule } from '@namnh240795/prisma';
import { SmsModule } from './sms/sms.module';

@Module({
  imports: [HealthcheckModule, PrismaModule, RegistrationModule, SmsModule],
  controllers: [],
  providers: [],
})
export class BackendModule {}
