import { Test, TestingModule } from '@nestjs/testing';
import { QueueingController } from './queueing.controller';
import { QueueingService } from './queueing.service';

describe('QueueingController', () => {
  let queueingController: QueueingController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [QueueingController],
      providers: [QueueingService],
    }).compile();

    queueingController = app.get<QueueingController>(QueueingController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(queueingController.getHello()).toBe('Hello World!');
    });
  });
});
