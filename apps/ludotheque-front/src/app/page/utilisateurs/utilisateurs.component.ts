import {Component} from '@angular/core';
import {HeaderComponent} from "../../shared/header.component";
import {TableauUtilisateursComponent} from "./tableau-utilisateurs/tableau-utilisateurs.component";
import {UtilisateursService} from "../../shared/services/utilisateurs.service";

@Component({
  selector: 'app-utilisateurs',
    imports: [
        HeaderComponent,
        TableauUtilisateursComponent
    ],
  templateUrl: './utilisateurs.component.html'
})
export class UtilisateursComponent {

    constructor(private readonly utilisateursService: UtilisateursService) {
        this.utilisateursService.findAll();
    }

    getListUtilisateurs(){
        return this.utilisateursService.listUtilisateurs();
    }

}
