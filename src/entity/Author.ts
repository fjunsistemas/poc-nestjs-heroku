import { Photo } from './Photo';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity({ name: 'author', schema: 'heroku' })
export class Author {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(
    type => Photo,
    photo => photo.author,
  )
  photos: Photo[];
}
