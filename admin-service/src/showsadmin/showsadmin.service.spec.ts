import { Test, TestingModule } from '@nestjs/testing';
import { ShowsadminService } from './showsadmin.service';

describe('ShowsadminService', () => {
  let service: ShowsadminService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShowsadminService],
    }).compile();

    service = module.get<ShowsadminService>(ShowsadminService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
