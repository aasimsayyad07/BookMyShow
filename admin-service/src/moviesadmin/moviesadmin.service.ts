import {
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { AddMovie } from './dto/addMovie.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from './entity/movie.entity';
import { Repository } from 'typeorm';
import { Response } from 'express';
import { UpdateMovie } from './dto/updateMoview.dto';

@Injectable()
export class MoviesadminService {
  constructor(
    @InjectRepository(Movie) private movieRepository: Repository<Movie>,
  ) {}

  async addMovie(addMovieDto: AddMovie) {
    try {
      const movie = this.movieRepository.create(addMovieDto);
      const result = await this.movieRepository.save(movie);
      if (result) {
        return {
          code: 'Movie Details Added Succesfully',
          statusCode: HttpStatus.CREATED,
        };
      }
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException();
    }
  }

  async updateMovie(
    id: string,
    updateMovieDto: UpdateMovie,
    response: Response,
  ) {
    try {
      const movie = await this.movieRepository.findOne({
        where: { movieId: id },
      });

      if (!movie) {
        return response.status(HttpStatus.NOT_FOUND).json({
          message: 'movieID is not validate',
          statusCode: HttpStatus.NOT_FOUND,
        });
      }

      const result = await this.movieRepository.update(
        { movieId: id },
        {
          movieIMD: updateMovieDto.movieIMD,
          movieInitialPrice: updateMovieDto.movieInitialPrice,
        },
      );

      if (!result) {
        return response.status(HttpStatus.NOT_MODIFIED).json({
          message: 'Movie details update failed',
          statusCode: HttpStatus.NOT_MODIFIED,
        });
      }

      return response.status(HttpStatus.OK).json({
        message: 'Movie details Updated',
        statusCode: HttpStatus.OK,
      });
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException();
    }
  }

  async removeMovie(id: string, response: Response) {
    try {
      const movie = await this.movieRepository.findOne({
        where: { movieId: id },
      });

      if (!movie) {
        return response.status(HttpStatus.NOT_FOUND).json({
          message: 'movieID is not validate',
          statusCode: HttpStatus.NOT_FOUND,
        });
      }

      await this.movieRepository.remove(movie);

      return response.status(HttpStatus.OK).json({
        message: 'Movie Details removed successfully',
        statusCode: HttpStatus.OK,
      });
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException();
    }
  }
}
