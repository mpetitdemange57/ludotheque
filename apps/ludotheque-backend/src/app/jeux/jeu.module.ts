import {Module} from '@nestjs/common';
import {JeuController} from "./jeu.controller";
import {JeuService} from "./jeu.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {JeuEntity} from "./jeu.entity";

@Module({
    imports: [TypeOrmModule.forFeature([JeuEntity])],
    controllers: [JeuController],
    providers: [JeuService],
})
export class JeuModule {}