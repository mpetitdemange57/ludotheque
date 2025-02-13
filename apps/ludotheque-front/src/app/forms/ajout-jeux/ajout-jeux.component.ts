import { Component } from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {HeaderComponent} from "../../shared/header.component";

@Component({
  selector: 'app-ajout-jeux',
  imports: [
    MatFormField,
    MatInput,
    MatButton,
    MatLabel,
    HeaderComponent
  ],
  templateUrl: './ajout-jeux.component.html',
  styleUrl: './ajout-jeux.component.css'
})
export class AjoutJeuxComponent {

}
