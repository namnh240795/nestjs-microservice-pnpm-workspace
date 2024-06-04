import { Test, TestingModule } from '@nestjs/testing';
import { SmsController } from './sms.controller';
import { SmsService } from './sms.service';

describe('SmsController', () => {
  let smsController: SmsController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SmsController],
      providers: [SmsService],
    }).compile();

    smsController = app.get<SmsController>(SmsController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(smsController.getHello()).toBe('Hello World!');
    });
  });
});
