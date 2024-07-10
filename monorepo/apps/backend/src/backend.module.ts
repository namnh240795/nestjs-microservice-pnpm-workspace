import { Module } from '@nestjs/common';
import { RegistrationModule } from './registration/registration.module';
import { HealthcheckModule } from '@namnh240795/healthcheck';
import { PgsqlPrismaModule } from 'libs/pgsql-prisma/src';
import { SmsModule } from './sms/sms.module';
import { SignInModule } from './sign-in/sign-in.module';
import { ConfigModule } from '@nestjs/config';
import { MongoPrismaModule } from '@namnh240795/mongo-prisma';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    HealthcheckModule,
    PgsqlPrismaModule,
    MongoPrismaModule,
    RegistrationModule,
    SmsModule,
    SignInModule,
  ],
  controllers: [],
  providers: [],
})
export class BackendModule {}
