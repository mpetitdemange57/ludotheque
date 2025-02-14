import { Component } from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {HeaderComponent} from "../../shared/header.component";
import {MatCard, MatCardContent} from "@angular/material/card";
import {FormsModule} from "@angular/forms";
import {UtilisateursService} from "../../shared/services/utilisateurs.service";
import {UtilisateurDto} from "../../../../../../libs/contrat/UtilisateurDto";
import {UpperCasePipe} from "@angular/common";

@Component({
  selector: 'app-ajout-utilisateur',
    imports: [
        MatFormField,
        MatInput,
        MatButton,
        MatLabel,
        HeaderComponent,
        MatCard,
        MatCardContent,
        FormsModule
    ],
  templateUrl: './ajout-utilisateur.component.html',
  styleUrl: './ajout-utilisateur.component.scss'
})
export class AjoutUtilisateurComponent {

    form: UtilisateurDto = {}


    constructor(private readonly utilisateursService: UtilisateursService) {

    }

    sauvegarder(){
        this.utilisateursService.save(this.form)
    }

    annuler() {

    }
}
