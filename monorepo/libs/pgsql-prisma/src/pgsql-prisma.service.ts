import { OnModuleInit } from '@nestjs/common';
import { Global, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/pgsql-client';

@Global()
@Injectable()
export class PgsqlPrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}
