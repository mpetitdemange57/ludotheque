import {Injectable, signal} from '@angular/core';
import {JeuDto} from "../../../../../../libs/contrat/JeuDto";
import {UtilisateurDto} from "../../../../../../libs/contrat/UtilisateurDto";
import {DataService} from "./data.service";

@Injectable({
  providedIn: 'root'
})
export class UtilisateursService {

  private readonly PATH = '/utilisateurs'
  listUtilisateurs = signal<Array<UtilisateurDto>>([])

  constructor(private readonly dataService:DataService) { }

  findAll(){
    this.dataService
        .sendGetRequest<Array<UtilisateurDto>>(this.PATH)
        .subscribe((utilisateurs) => this.listUtilisateurs.set(utilisateurs))
  }
}
