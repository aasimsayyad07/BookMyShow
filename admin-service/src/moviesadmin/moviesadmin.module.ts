import { Module } from '@nestjs/common';
import { MoviesadminService } from './moviesadmin.service';
import { MoviesadminController } from './moviesadmin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { Movie } from './entity/movie.entity';

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DBHOST,
      port: +process.env.DBPORT,
      username: process.env.DBUSER,
      password: process.env.DBPASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [Movie],
      synchronize: false,
    }),
    TypeOrmModule.forFeature([Movie]),
  ],
  controllers: [MoviesadminController],
  providers: [MoviesadminService],
})
export class MoviesadminModule {}
