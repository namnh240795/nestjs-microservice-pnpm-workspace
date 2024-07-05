import { Test, TestingModule } from '@nestjs/testing';
import { FrontendController } from './frontend.controller';
import { FrontendService } from './frontend.service';

describe('FrontendController', () => {
  let frontendController: FrontendController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FrontendController],
      providers: [FrontendService],
    }).compile();

    frontendController = app.get<FrontendController>(FrontendController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(frontendController.getHello()).toBe('Hello World!');
    });
  });
});
