import {Inject, Injectable} from '@nestjs/common';
import {UtilisateurEntity} from "./utilisateur.entity";
import { Repository } from 'typeorm';
import {InjectRepository} from "@nestjs/typeorm";
import {UtilisateurDto} from "../../../../../libs/contrat/UtilisateurDto";

@Injectable()
export class UtilisateurService {


    constructor( @InjectRepository(UtilisateurEntity)  private readonly utilisateurRepository: Repository<UtilisateurEntity>,) {
    }

    public findAll(): Promise<UtilisateurEntity[]> {
        return this.utilisateurRepository.find({order: {
            "nom" : "asc"
            }});
    }

    public findOne(id: number): Promise<UtilisateurEntity | null> {
        return this.utilisateurRepository.findOne({where: {id: id}});
    }

    create(utilisateur: UtilisateurDto) {
        console.log(utilisateur)
        return this.utilisateurRepository.save(this.utilisateurRepository.create(utilisateur));
    }
}