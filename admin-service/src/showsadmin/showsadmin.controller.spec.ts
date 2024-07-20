import { Test, TestingModule } from '@nestjs/testing';
import { ShowsadminController } from './showsadmin.controller';
import { ShowsadminService } from './showsadmin.service';

describe('ShowsadminController', () => {
  let controller: ShowsadminController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShowsadminController],
      providers: [ShowsadminService],
    }).compile();

    controller = module.get<ShowsadminController>(ShowsadminController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
