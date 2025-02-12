import { Component } from '@angular/core';
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-ajout-utilisateur',
    imports: [
        MatFormField,
        MatInput
    ],
  templateUrl: './ajout-utilisateur.component.html',
  styleUrl: './ajout-utilisateur.component.scss'
})
export class AjoutUtilisateurComponent {

}
