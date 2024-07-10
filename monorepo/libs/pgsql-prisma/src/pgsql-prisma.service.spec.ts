import { Test, TestingModule } from '@nestjs/testing';
import { PgsqlPrismaService } from './pgsql-prisma.service';

describe('PrismaService', () => {
  let service: PgsqlPrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PgsqlPrismaService],
    }).compile();

    service = module.get<PgsqlPrismaService>(PgsqlPrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
