import { Module } from '@nestjs/common';
import { RegistrationModule } from './registration/registration.module';
import { HealthcheckModule } from '@namnh240795/healthcheck';
import { PrismaModule } from '@namnh240795/prisma';
import { SmsModule } from './sms/sms.module';
import { SignInModule } from './sign-in/sign-in.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    HealthcheckModule,
    PrismaModule,
    RegistrationModule,
    SmsModule,
    SignInModule,
  ],
  controllers: [],
  providers: [],
})
export class BackendModule {}
