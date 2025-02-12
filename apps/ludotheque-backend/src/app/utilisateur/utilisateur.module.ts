import {Module} from '@nestjs/common';
import {UtilisateurService} from "./utilisateur.service";
import {UtilisateurController} from "./utilisateur.controller";
import {UtilisateurEntity} from "./utilisateur.entity";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
    imports: [TypeOrmModule.forFeature([UtilisateurEntity])],
    controllers: [UtilisateurController],
    providers: [UtilisateurService],
})
export class UtilisateurModule {}