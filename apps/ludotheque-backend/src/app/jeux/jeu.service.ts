import {Injectable} from '@nestjs/common';
import {JeuEntity} from "./jeu.entity";
import {DeleteResult, Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {JeuDto} from "../../../../../libs/contrat/JeuDto";


@Injectable()
export class JeuService {

    constructor( @InjectRepository(JeuEntity) private readonly jeuRepository: Repository<JeuEntity>,) {
    }


    findAll(): Promise<JeuEntity[]> {
        return this.jeuRepository.find();
    }

    create(jeu: JeuDto): JeuEntity {
        return this.jeuRepository.create(jeu);
    }

    deleteById(id: number): Promise<DeleteResult> {
        return this.jeuRepository.delete({
            id: id
        });
    }
}