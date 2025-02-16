import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {UtilisateurService} from "./utilisateur.service";
import {JeuDto} from "../../../../../libs/contrat/JeuDto";
import {UtilisateurDto} from "../../../../../libs/contrat/UtilisateurDto";

@Controller('utilisateurs')
export class UtilisateurController {
    constructor(private readonly utilisateurService: UtilisateurService) {}

    @Get()
    findAll() {
        return this.utilisateurService.findAll();
    }

    @Get(':id')
    findOne(@Param() params: any) {
        return this.utilisateurService.findOne(params.id);
    }

    @Post()
    create(@Body() utilisateur:UtilisateurDto) {
        console.log(utilisateur)
        return this.utilisateurService.create(utilisateur);
    }

    @Put()
    edit(@Body() utilisateur:UtilisateurDto) {
        console.log(utilisateur)
        return this.utilisateurService.edit(utilisateur);
    }

    @Delete(':id')
    delete(@Param() params: any) {
        return this.utilisateurService.deleteById(params.id);
    }
}
