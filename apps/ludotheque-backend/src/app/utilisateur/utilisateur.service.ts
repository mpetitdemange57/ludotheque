import {Inject, Injectable} from '@nestjs/common';
import {UtilisateurEntity} from "./utilisateur.entity";
import { Repository } from 'typeorm';
import {InjectRepository} from "@nestjs/typeorm";
import {UtilisateurDto} from "../../../../../libs/contrat/UtilisateurDto";

@Injectable()
export class UtilisateurService {


    constructor( @InjectRepository(UtilisateurEntity)  private readonly utilisateurRepository: Repository<UtilisateurEntity>,) {
    }

    findAll(): Promise<UtilisateurEntity[]> {
        return this.utilisateurRepository.find({order: {
            "nom" : "asc"
            }});
    }

    findOne(id: number): Promise<UtilisateurEntity | null> {
        return this.utilisateurRepository.findOne({where: {id: id}});
    }

    createOrUpdate(utilisateur: UtilisateurDto) {
        return this.utilisateurRepository.upsert(this.utilisateurRepository.create(utilisateur), ['id']);
    }


    deleteById(id:number) {
        return this.utilisateurRepository.delete({id: id});
    }
}