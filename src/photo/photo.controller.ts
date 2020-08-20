import { Photo } from './../entity/Photo';
import { Controller, Get, Post, Body } from '@nestjs/common';
import { getRepository } from 'typeorm';

@Controller('photos')
export class PhotoController {
  @Get()
  async getAll(): Promise<Photo[]> {
    return getRepository(Photo).find();
  }

  @Post()
  async salvar(@Body() photo: Photo): Promise<Photo> {
    return getRepository(Photo).save(photo);
  }
}
