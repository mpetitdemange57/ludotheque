import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {JeuService} from "./jeu.service";
import {JeuDto} from "../../../../../libs/contrat/JeuDto";

@Controller('jeux')
export class JeuController {
    constructor(private readonly jeuService: JeuService) {}


    @Get()
    findAll() {
        return this.jeuService.findAll();
    }

    @Get(':id')
    findOne(@Param() params: any) {
        return this.jeuService.findOne(params.id);
    }

    @Post()
    createOrUpdate(@Body() jeu:JeuDto) {
        return this.jeuService.createOrUpdate(jeu);
    }

    @Delete(':id')
    delete(@Param() params: any) {
        return this.jeuService.deleteById(params.id);
    }

}
