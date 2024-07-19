import { Test, TestingModule } from '@nestjs/testing';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import exp from 'constants';

describe('CatsController', () => {
  let controller: CatsController;
  let service: CatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CatsController],
      providers: [CatsService],
    }).compile();

    controller = module.get<CatsController>(CatsController);
    service = module.get<CatsService>(CatsService);
  });

  describe('findAll', () => {
    it('should return an array of cats', () => {
      const result = [{ name: '' }];
      jest.spyOn(service, 'findAll').mockImplementation(() => result);
      expect(controller.findAll()).toBe(result);
    });
  });

  describe('findOne', () => {
    it('should return a cat', () => {
      const result = { name: '' };
      jest.spyOn(service, 'findOne').mockImplementation(() => result.name);
      expect(controller.findOne('1')).toBe(result.name);
    });
  });

  describe('create', () => {
    it('should return a cat', () => {
      const result = { name: '' };
      jest.spyOn(service, 'create').mockImplementation(() => result.name);
      expect(controller.create({ name: '' })).toBe(result.name);
    });
  });

  describe('update', () => {
    it('should return a cat', () => {
      const result = { name: '' };
      jest.spyOn(service, 'update').mockImplementation(() => result.name);
      expect(controller.update({ name: '' })).toBe(result.name);
    });
  });

  describe('remove', () => {
    it('should return a cat', () => {
      const result = { name: '' };
      jest.spyOn(service, 'remove').mockImplementation(() => result.name);
      expect(controller.remove('1')).toBe(result.name);
    });
  });
});
