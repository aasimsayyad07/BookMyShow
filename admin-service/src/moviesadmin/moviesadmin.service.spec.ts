import { Test, TestingModule } from '@nestjs/testing';
import { MoviesadminService } from './moviesadmin.service';

describe('MoviesadminService', () => {
  let service: MoviesadminService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesadminService],
    }).compile();

    service = module.get<MoviesadminService>(MoviesadminService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
