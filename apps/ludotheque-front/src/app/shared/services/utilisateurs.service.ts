import {Injectable, signal} from '@angular/core';
import {JeuDto} from "../../../../../../libs/contrat/JeuDto";
import {UtilisateurDto} from "../../../../../../libs/contrat/UtilisateurDto";
import {DataService} from "./data.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class UtilisateursService {

  private readonly PATH = '/utilisateurs'
  listUtilisateurs = signal<Array<UtilisateurDto>>([])

  constructor(private readonly dataService:DataService, private readonly snackBar: MatSnackBar) { }

  findAll(){
    this.dataService
        .sendGetRequest<Array<UtilisateurDto>>(this.PATH)
        .subscribe((utilisateurs) => this.listUtilisateurs.set(utilisateurs))
  }

  save(form: UtilisateurDto) {
    this.dataService.sendPostRequest(this.PATH, form)
        .subscribe(() => {
          this.snackBar.open("Utilisateur sauvegardé","Fermer")
        })
  }
}
