import { Module } from '@nestjs/common';
import { MoviesadminModule } from './moviesadmin/moviesadmin.module';
import { ShowsadminModule } from './showsadmin/showsadmin.module';

@Module({
  imports: [MoviesadminModule, ShowsadminModule],
})
export class AppModule {}
