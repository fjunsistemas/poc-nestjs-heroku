import { Photo } from './Photo';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity({ name: 'photometadata', schema: 'heroku' })
export class PhotoMetadata {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('int')
  height: number;

  @Column()
  width: number;

  @Column()
  orientation: string;

  @Column()
  compressed: boolean;

  @Column()
  comment: string;

  @OneToOne(type => Photo)
  @JoinColumn()
  photo: Photo;

  /* Relação inversa */
  // @OneToOne(type => Photo, photo => photo.metadata)
  // @JoinColumn()
  // photo: Photo;

  /* Na entidade Photo */
  // @OneToOne(type => PhotoMetadata, photoMetadata => photoMetadata.photo)
  // metadata: PhotoMetadata;
}
