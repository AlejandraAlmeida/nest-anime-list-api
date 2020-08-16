import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AnimeController } from './anime.controller';
import { AnimeService } from './anime.service';
import { animeSchema } from './schemas/anime.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name:'Anime', schema: animeSchema }
    ]),
  ],
  controllers: [AnimeController],
  providers: [AnimeService]
})
export class AnimeModule {}
