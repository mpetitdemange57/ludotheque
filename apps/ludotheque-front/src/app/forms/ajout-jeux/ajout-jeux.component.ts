import { Component } from '@angular/core';
import {MatFormField, MatFormFieldModule, MatHint, MatLabel} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {HeaderComponent} from "../../shared/header.component";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatOption, MatSelect} from "@angular/material/select";
import {UtilisateursService} from "../../shared/services/utilisateurs.service";
import {MatDatepicker, MatDatepickerInput, MatDatepickerModule, MatDatepickerToggle} from "@angular/material/datepicker";

@Component({
  selector: 'app-ajout-jeux',
    imports: [
        MatFormField,
        MatInput,
        MatButton,
        MatLabel,
        HeaderComponent,
        MatCard,
        MatCardContent,
        MatSelect,
        MatOption,
        MatDatepickerInput,
        MatDatepickerToggle,
        MatDatepicker,
        MatHint,
        MatFormFieldModule, MatInputModule, MatDatepickerModule
    ],
  templateUrl: './ajout-jeux.component.html',
  styleUrl: './ajout-jeux.component.css',
})
export class AjoutJeuxComponent {

    constructor(private readonly utilisateurService: UtilisateursService) {
        utilisateurService.findAll();
    }

    getListUtilisateurs(){
        return this.utilisateurService.listUtilisateurs()
    }

}
