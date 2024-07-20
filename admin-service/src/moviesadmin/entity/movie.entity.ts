import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('movies')
export class Movie {
  @PrimaryGeneratedColumn('uuid')
  movieId: string;

  @Column({ type: 'varchar', length: 100 })
  movieName: string;

  @Column({ type: 'varchar', length: 100 })
  movieGenure: string;

  @Column()
  movieIMD: number;

  @Column({ type: 'varchar', length: 100 })
  movieReleaseDate: string;

  @Column({ type: 'float' })
  movieInitialPrice: number;
}
