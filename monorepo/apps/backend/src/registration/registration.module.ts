import { Module } from '@nestjs/common';
import { RegistrationService } from './registration.service';
import { RegistrationController } from './registration.controller';

@Module({
  controllers: [RegistrationController],
  providers: [RegistrationService],
})
export class RegistrationModule {}
