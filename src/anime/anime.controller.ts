import { Controller , Get, Post, Put, Delete, Res, HttpStatus, Body} from '@nestjs/common';

import { CreateAnimeDTO } from './dto/anime.dto'


@Controller('anime')
export class AnimeController {

    @Post('/create')
    createPost(@Res() res, @Body() createAnimeDTO: CreateAnimeDTO){
        console.log(createAnimeDTO)
        return res.status(HttpStatus.OK).json({
            message:'recibido'
        })
    }
}
