import { Test, TestingModule } from '@nestjs/testing';
import { CatsService } from './cats.service';

describe('CatsService', () => {
  let service: CatsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatsService],
    }).compile();

    service = module.get<CatsService>(CatsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return "ok"', () => {
    expect(service.create({ name: 'test' })).toBe('ok');
  });

  it('should return an array of cats', () => {
    expect(service.findAll()).toEqual([]);
  });

  it('should return a cat', () => {
    expect(service.findOne('1')).toBe('This action returns a #1 cat');
  });

  it('should return a cat', () => {
    expect(service.update({ name: 'test' })).toBe(
      'This action updates a #test cat',
    );
  });

  it('should return a cat', () => {
    expect(service.remove('test')).toBe('This action removes a #test cat');
  });
});
