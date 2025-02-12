import { Component } from '@angular/core';
import {HeaderComponent} from "../../shared/header.component";
import {MatAnchor, MatButton, MatFabAnchor, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-utilisateurs',
    imports: [
        HeaderComponent,
        MatButton,
        MatIconButton,
        MatIcon,
        MatAnchor,
        MatFabAnchor
    ],
  templateUrl: './utilisateurs.component.html',
  styleUrl: './utilisateurs.component.scss'
})
export class UtilisateursComponent {

}
