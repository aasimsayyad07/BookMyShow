import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class AddMovie {
  @IsString()
  @IsNotEmpty()
  movieName: string;

  @IsString()
  @IsNotEmpty()
  movieGenure: string;

  @IsNumber()
  @IsNotEmpty()
  movieIMD: number;

  @IsString()
  @IsNotEmpty()
  movieReleaseDate: string;

  @IsNumber()
  @IsNotEmpty()
  movieInitialPrice: number;
}
