import { Test, TestingModule } from '@nestjs/testing';
import { ClassicWarService } from './classic-war.service';

describe('ClassicWarService', () => {
  let service: ClassicWarService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClassicWarService],
    }).compile();

    service = module.get<ClassicWarService>(ClassicWarService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
