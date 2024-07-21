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
import { UpdateMovie } from './dto/updateMoview.dto';

@Controller('admin-service')
export class MoviesadminController {
  constructor(private readonly moviesadminService: MoviesadminService) {}

  @Post('addMovie')
  @UsePipes(ValidationPipe)
  addMovie(@Body() addMovieData: AddMovie) {
    return this.moviesadminService.addMovie(addMovieData);
  }

  @Put(':movieId/updateMovie')
  @UsePipes(ValidationPipe)
  updateMovie(
    @Param('movieId', ParseUUIDPipe) id: string,
    @Body() updateMovieDto: UpdateMovie,
    @Res() response: Response,
  ) {
    return this.moviesadminService.updateMovie(id, updateMovieDto, response);
  }

  @Delete(':movieId/RemoveMovie')
  removemovie(
    @Param('movieId', ParseUUIDPipe) id: string,
    @Res() response: Response,
  ) {
    return this.moviesadminService.removeMovie(id, response);
  }
}
