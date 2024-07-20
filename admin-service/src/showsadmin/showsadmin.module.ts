import { Module } from '@nestjs/common';
import { ShowsadminService } from './showsadmin.service';
import { ShowsadminController } from './showsadmin.controller';

@Module({
  controllers: [ShowsadminController],
  providers: [ShowsadminService],
})
export class ShowsadminModule {}
