import { Test, TestingModule } from '@nestjs/testing';
import { SignInController } from './sign-in.controller';
import { SignInService } from './sign-in.service';

describe('SignInController', () => {
  let controller: SignInController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SignInController],
      providers: [SignInService],
    }).compile();

    controller = module.get<SignInController>(SignInController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
