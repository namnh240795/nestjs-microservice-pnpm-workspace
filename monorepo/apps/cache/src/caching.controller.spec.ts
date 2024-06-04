import { Test, TestingModule } from '@nestjs/testing';
import { CachingController } from './caching.controller';
import { CachingService } from './caching.service';

describe('CachingController', () => {
  let cachingController: CachingController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CachingController],
      providers: [CachingService],
    }).compile();

    cachingController = app.get<CachingController>(CachingController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(cachingController.getHello()).toBe('Hello World!');
    });
  });
});
