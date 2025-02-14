import {Component} from '@angular/core';
import {HeaderComponent} from "../../shared/header.component";
import {TableauJeuxComponent} from "./tableau-jeux/tableau-jeux.component";
import {UtilisateursService} from "../../shared/services/utilisateurs.service";
import {JeuxService} from "../../shared/services/jeux.service";

@Component({
  selector: 'app-jeux',
    imports: [
        HeaderComponent,
        TableauJeuxComponent
    ],
  templateUrl: './jeux.component.html',
  styleUrl: './jeux.component.scss'
})
export class JeuxComponent {

    constructor(private readonly jeuxService: JeuxService) {
        this.jeuxService.findAll();
    }

    getListJeux(){
        return this.jeuxService.listJeux();
    }

}
