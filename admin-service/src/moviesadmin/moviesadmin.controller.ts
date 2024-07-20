import {
  Controller,
  Post,
  Delete,
  Put,
  Body,
  UsePipes,
  ValidationPipe,
  Param,
  ParseUUIDPipe,
  Res,
} from '@nestjs/common';
import { MoviesadminService } from './moviesadmin.service';
import { AddMovie } from './dto/addMovie.dto';
import { Response } from 'express';

@Controller('admin-service')
export class MoviesadminController {
  constructor(private readonly moviesadminService: MoviesadminService) {}

  @Post('addMovie')
  @UsePipes(ValidationPipe)
  addMovie(@Body() addMovieData: AddMovie) {
    return this.moviesadminService.addMovie(addMovieData);
  }

  @Put('updateMovie')
  updateMovie() {
    return this.moviesadminService.updateMovie();
  }

  @Delete(':movieId/RemoveMovie')
  removemovie(
    @Param('movieId', ParseUUIDPipe) id: string,
    @Res() response: Response,
  ) {
    return this.moviesadminService.removeMovie(id, response);
  }
}
