import {Injectable, signal} from '@angular/core';
import {JeuDto} from "../../../../../../libs/contrat/JeuDto";
import {DataService} from "./data.service";
import * as PATH from "node:path";

@Injectable({
  providedIn: 'root'
})
export class JeuxService {

  private readonly PATH = '/jeux'
  listJeux = signal<Array<JeuDto>>(null)

  constructor(private readonly dataService:DataService) { }

  findAll(){
    this.dataService
        .sendGetRequest<Array<JeuDto>>(this.PATH)
        .subscribe((jeux) => this.listJeux.set(jeux))
  }

}
