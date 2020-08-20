import { Photo } from './Photo';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';

/* 
  Caso vá utilizar algum schema específico, este deve estar criado no banco
  Se for utilizzar o schema public, basta deixar sem a tag schema
*/
@Entity({ name: 'album', schema: 'heroku' })
export class Album {
  /* 
    Annotation utilizada para geração da chave (generate + sequence + pk)
  */
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToMany(
    type => Photo,
    photo => photo.albums,
  )
  @JoinTable()
  photos: Photo[];
}
