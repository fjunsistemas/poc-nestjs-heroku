import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { getCustomRepository } from 'typeorm';

import { AuthorRepository } from './author.repository';
import { Author } from '../entity/Author';
import { Photo } from '../entity/Photo';

@Controller('authors')
export class AuthorController {
  @Get()
  async getAll(): Promise<Author[]> {
    return getCustomRepository(AuthorRepository).find();
  }

  @Get('por-nome/:name')
  async getByName(@Param('name') name: string): Promise<Author[]> {
    return getCustomRepository(AuthorRepository).findByName(name);
  }

  @Get('fotos-por-nome-autor/:nome')
  async getFotoPorNomeAutor(@Param('nome') nome: string): Promise<Photo[]> {
    return getCustomRepository(AuthorRepository).findPhotosByAuthorName(nome);
  }

  @Post()
  async save(@Body() author: Author): Promise<Author> {
    return getCustomRepository(AuthorRepository).salvar(author);
  }
}
