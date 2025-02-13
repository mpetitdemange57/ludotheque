import {Component, Input} from '@angular/core';
import {MatFabAnchor} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatTooltip} from "@angular/material/tooltip";
import {RouterLink} from "@angular/router";
import {UtilisateurDto} from "../../../../../../../libs/contrat/UtilisateurDto";

@Component({
  selector: 'app-tableau-utilisateurs',
  imports: [
    MatFabAnchor,
    MatIcon,
    MatTooltip,
    RouterLink,
  ],
  templateUrl: './tableau-utilisateurs.component.html',
  styleUrl: './tableau-utilisateurs.component.scss'
})
export class TableauUtilisateursComponent {

  @Input()
  listUtilisateurs: UtilisateurDto[] = [];

}
