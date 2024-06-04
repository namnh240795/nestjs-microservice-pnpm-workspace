import { Test, TestingModule } from '@nestjs/testing';
import { SendmailService } from './sendmail.service';

describe('SendmailService', () => {
  let service: SendmailService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SendmailService],
    }).compile();

    service = module.get<SendmailService>(SendmailService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
