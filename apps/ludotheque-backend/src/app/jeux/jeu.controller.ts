import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {JeuService} from "./jeu.service";
import {JeuDto} from "../../../../../libs/contrat/JeuDto";
import {ApiOperation, ApiResponse} from '@nestjs/swagger';

@Controller('jeux')
export class JeuController {
    constructor(private readonly jeuService: JeuService) {}


    @ApiOperation({ summary: 'Récupère la liste de tous les jeux enregistrés' })
    @ApiResponse({ status: 200, description: 'La liste de tous les jeux', schema: {} })
    @Get()
    findAll() {
        return this.jeuService.findAll();
    }

    @ApiOperation({ summary: 'Récupère les données d\'un jeu à partir de son id' })
    @ApiResponse({ status: 200, description: 'Le jeu dont l\'id a été passé en paramètre', schema:  {}})
    @Get(':id')
    findOne(@Param() params: any) {
        return this.jeuService.findOne(params.id);
    }

    @ApiOperation({ summary: 'Enregistre ou met à jour un jeu', description: 'Si un id est renseigné, mets à jour les données du jeu, sinon enregistre un nouveau jeu dans la base de données' })
    @ApiResponse({ status: 200, schema: {}})
    @Post()
    createOrUpdate(@Body() jeu:JeuDto) {
        return this.jeuService.createOrUpdate(jeu);
    }

    @ApiOperation({ summary: 'Supprime un jeu à partir de son id'})
    @ApiResponse({ status: 200, schema: {}})
    @Delete(':id')
    delete(@Param() params: any) {
        return this.jeuService.deleteById(params.id);
    }

}
