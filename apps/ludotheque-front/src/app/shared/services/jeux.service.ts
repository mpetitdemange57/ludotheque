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

  jeuAEditer = signal<JeuDto | null>(null)
  listJeux = signal<Array<JeuDto>>([])

  constructor(private readonly dataService:DataService) { }

  findAll(){
    this.dataService
        .sendGetRequest<Array<JeuDto>>(this.PATH)
        .subscribe((jeux) => this.listJeux.set(jeux))
  }

  save(form: JeuDto) {
    return this.dataService.sendPostRequest(this.PATH, form);
  }

  findById(id: string) {
    this.dataService.sendGetRequest<JeuDto>(this.PATH + "/" + id)
        .subscribe((value) => {
          this.jeuAEditer.set(value);
        })
  }

    delete(id: number) {
        return this.dataService.sendDeleteRequest(this.PATH + "/" + id);
    }


}
