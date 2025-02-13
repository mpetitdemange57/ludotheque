import { Component } from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {HeaderComponent} from "../../shared/header.component";

@Component({
  selector: 'app-ajout-utilisateur',
    imports: [
        MatFormField,
        MatInput,
        MatButton,
        MatLabel,
        HeaderComponent
    ],
  templateUrl: './ajout-utilisateur.component.html',
  styleUrl: './ajout-utilisateur.component.scss'
})
export class AjoutUtilisateurComponent {

}
