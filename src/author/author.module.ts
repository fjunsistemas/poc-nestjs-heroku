import { AuthorController } from './author.controller';
import { Module } from '@nestjs/common';

import { Author } from '../entity/Author';

@Module({
  controllers: [AuthorController],
})
export class AuthorModule {}
