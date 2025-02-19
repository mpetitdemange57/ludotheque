import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {UtilisateurService} from "./utilisateur.service";
import {JeuDto} from "../../../../../libs/contrat/JeuDto";
import {UtilisateurDto} from "../../../../../libs/contrat/UtilisateurDto";
import {ApiOperation, ApiResponse} from "@nestjs/swagger";

@Controller('utilisateurs')
export class UtilisateurController {
    constructor(private readonly utilisateurService: UtilisateurService) {}

    @ApiOperation({ summary: 'Récupère la liste de tous les utilisateurs enregistrés' })
    @ApiResponse({ status: 200, description: 'La liste de tous les jeux', schema: {} })
    @Get()
    findAll() {
        return this.utilisateurService.findAll();
    }

    @ApiOperation({ summary: 'Récupère les données d\'un utilisateur à partir de son id' })
    @ApiResponse({ status: 200, description: 'L\'utilisateur dont l\'id a été passé en paramètre', schema:  {}})
    @Get(':id')
    findOne(@Param() params: any) {
        return this.utilisateurService.findOne(params.id);
    }

    @ApiOperation({ summary: 'Enregistre ou met à jour un utilisateur', description: 'Si un id est renseigné, mets à jour les données de l\'utilisateur, sinon enregistre un nouvel utilisateur dans la base de données' })
    @ApiResponse({ status: 200, schema: {}})
    @Post()
    createOrUpdate(@Body() utilisateur:UtilisateurDto) {
        return this.utilisateurService.createOrUpdate(utilisateur);
    }

    @ApiOperation({
        summary: 'Supprime un utilisateur à partir de son id',
        description: 'Lorsqu\'un utilisateur est supprimé. ' +
            'S\'il a emprunté ou s\'il est propriétaire d\'un livre, le lien dans le jeu est mit à null.'})
    @ApiResponse({ status: 200, schema: {}})
    @Delete(':id')
    delete(@Param() params: any) {
        return this.utilisateurService.deleteById(params.id);
    }
}
