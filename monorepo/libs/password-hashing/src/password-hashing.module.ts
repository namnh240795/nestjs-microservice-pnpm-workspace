import { Module } from '@nestjs/common';
import { PasswordHashingService } from './password-hashing.service';

@Module({
  providers: [PasswordHashingService],
  exports: [PasswordHashingService],
})
export class PasswordHashingModule {}
