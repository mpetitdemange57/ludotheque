import { Component } from '@angular/core';
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-ajout-jeux',
  imports: [
    MatFormField,
    MatInput
  ],
  templateUrl: './ajout-jeux.component.html',
  styleUrl: './ajout-jeux.component.css'
})
export class AjoutJeuxComponent {

}
