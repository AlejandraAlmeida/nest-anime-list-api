import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnimeModule } from './anime/anime.module';
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [AnimeModule, MongooseModule.forRoot('mongodb://localhost/animes-nest')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
