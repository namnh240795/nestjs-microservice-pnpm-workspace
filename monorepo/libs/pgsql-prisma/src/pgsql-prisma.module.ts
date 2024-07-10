import { Global, Module } from '@nestjs/common';
import { PgsqlPrismaService } from './pgsql-prisma.service';

@Global()
@Module({
  providers: [PgsqlPrismaService],
  exports: [PgsqlPrismaService],
})
export class PgsqlPrismaModule {}
