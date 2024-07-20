import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateMovie {
  @IsNumber()
  @IsNotEmpty()
  movieIMD: number;

  @IsNumber()
  @IsNotEmpty()
  movieInitialPrice: number;
}
