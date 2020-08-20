import { AuthorModule } from './author/author.module';
import { AuthorController } from './author/author.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PhotoController } from './photo/photo.controller';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configService } from './config/config.service';

@Module({
  imports: [
    AuthorModule,
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
  ],
  controllers: [PhotoController, AppController],
  providers: [AppService],
})
export class AppModule {}
