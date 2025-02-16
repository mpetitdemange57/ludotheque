import {Injectable, signal} from '@angular/core';
import {JeuDto} from "../../../../../../libs/contrat/JeuDto";
import {DataService} from "./data.service";
import {UtilisateurDto} from "../../../../../../libs/contrat/UtilisateurDto";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class JeuxService {

  private readonly PATH = '/jeux'
  listJeux = signal<Array<JeuDto>>([])

  constructor(private readonly dataService:DataService, private readonly snackBar: MatSnackBar) { }

  findAll(){
    this.dataService
        .sendGetRequest<Array<JeuDto>>(this.PATH)
        .subscribe((jeux) => this.listJeux.set(jeux))
  }

  save(form: JeuDto) {
    this.dataService.sendPostRequest(this.PATH, form)
        .subscribe(() => {
          this.snackBar.open("Jeu sauvegardé","Fermer")
        })
  }

}
