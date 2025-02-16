import {Injectable} from '@nestjs/common';
import {JeuEntity} from "./jeu.entity";
import {DeleteResult, Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {JeuDto} from "../../../../../libs/contrat/JeuDto";
import {UtilisateurEntity} from "../utilisateur/utilisateur.entity";


@Injectable()
export class JeuService {

    constructor( @InjectRepository(JeuEntity) private readonly jeuRepository: Repository<JeuEntity>,) {
    }


    findAll(): Promise<JeuEntity[]> {
        return this.jeuRepository.find({
            order: {
                titre: 'asc'
            }
        });
    }

    createOrUpdate(jeu: JeuDto){
        return this.jeuRepository.upsert(this.jeuRepository.create(jeu as JeuEntity), ['id']);
    }

    deleteById(id: number): Promise<DeleteResult> {
        return this.jeuRepository.delete({id: id});
    }

    findOne(id: number): Promise<JeuEntity | null> {
        return this.jeuRepository.findOne({where: {id: id}});
    }
}