import { Module } from '@nestjs/common';
import { RegistrationService } from './registration.service';
import { RegistrationController } from './registration.controller';
import { PasswordHashingModule } from '@namnh240795/password-hashing';

@Module({
  imports: [PasswordHashingModule],
  controllers: [RegistrationController],
  providers: [RegistrationService],
})
export class RegistrationModule {}
