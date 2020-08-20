import { EntityRepository, Repository } from 'typeorm';

import { Author } from '../entity/Author';
import { Photo } from './../entity/Photo';

@EntityRepository(Author)
export class AuthorRepository extends Repository<Author> {
  findByName(nome: string): Promise<Author[]> {
    return this.find({ where: { name: nome } });
  }

  findPhotosByAuthorName(nome: string): Promise<Photo[]> {
    console.log({
      query: this.createQueryBuilder()
        .select('photo')
        .from(Photo, 'photo')
        .leftJoin('photo.author', 'author')
        .where('LOWER(author.name) like LOWER(:nome)', {
          nome: '%'.concat(nome).concat('%'),
        })
        .getSql(),
    });

    return this.createQueryBuilder()
      .select('photo')
      .from(Photo, 'photo')
      .leftJoin('photo.author', 'author')
      .where('LOWER(author.name) like LOWER(:nome)', {
        nome: '%'.concat(nome).concat('%'),
      })
      .getMany();
  }

  salvar(author: Author): Promise<Author> {
    return this.save(author);
  }
}
