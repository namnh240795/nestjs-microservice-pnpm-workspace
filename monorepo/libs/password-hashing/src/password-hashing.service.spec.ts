import { Test, TestingModule } from '@nestjs/testing';
import { PasswordHashingService } from './password-hashing.service';

describe('PasswordHashingService', () => {
  let service: PasswordHashingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PasswordHashingService],
    }).compile();

    service = module.get<PasswordHashingService>(PasswordHashingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
