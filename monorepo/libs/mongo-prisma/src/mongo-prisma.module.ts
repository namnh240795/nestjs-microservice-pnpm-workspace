import { Global, Module } from '@nestjs/common';
import { MongoPrismaService } from './mongo-prisma.service';

@Global()
@Module({
  providers: [MongoPrismaService],
  exports: [MongoPrismaService],
})
export class MongoPrismaModule {}
