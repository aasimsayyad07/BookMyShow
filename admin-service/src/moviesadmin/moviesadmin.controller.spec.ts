import { Test, TestingModule } from '@nestjs/testing';
import { MoviesadminController } from './moviesadmin.controller';
import { MoviesadminService } from './moviesadmin.service';

describe('MoviesadminController', () => {
  let controller: MoviesadminController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MoviesadminController],
      providers: [MoviesadminService],
    }).compile();

    controller = module.get<MoviesadminController>(MoviesadminController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
