import { Module } from '@nestjs/common';
import { SignInService } from './sign-in.service';
import { SignInController } from './sign-in.controller';
import { GoogleAuthModule } from '@namnh240795/google-auth';

@Module({
  imports: [GoogleAuthModule],

  controllers: [SignInController],
  providers: [SignInService],
})
export class SignInModule {}
