import { Controller } from '@nestjs/common';
import { ShowsadminService } from './showsadmin.service';

@Controller('showsadmin')
export class ShowsadminController {
  constructor(private readonly showsadminService: ShowsadminService) {}
}
