import {UtilisateurDto} from "./UtilisateurDto";

export interface JeuDto{
    id?:number,
    titre: string,
    proprietaire?:UtilisateurDto,
    emprunteur?:UtilisateurDto,
    dateEmprunt?: Date

}