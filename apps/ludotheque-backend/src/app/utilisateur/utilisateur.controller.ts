import {Body, Controller, Get, Param, Post} from '@nestjs/common';
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
        return this.utilisateurService.create(utilisateur);
    }
}
