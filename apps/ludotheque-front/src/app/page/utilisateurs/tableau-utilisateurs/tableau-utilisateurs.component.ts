import {Component, Input} from '@angular/core';
import {MatFabAnchor, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatTooltip} from "@angular/material/tooltip";
import {RouterLink} from "@angular/router";
import {UtilisateurDto} from "../../../../../../../libs/contrat/UtilisateurDto";
import {MatCell, MatCellDef, MatColumnDef, MatHeaderCell, MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef, MatTable} from "@angular/material/table";
import {UtilisateurService} from "../../../../../../ludotheque-backend/src/app/utilisateur/utilisateur.service";
import {UtilisateursService} from "../../../shared/services/utilisateurs.service";

@Component({
  selector: 'app-tableau-utilisateurs',
  imports: [
    MatFabAnchor,
    MatIcon,
    MatTooltip,
    RouterLink,
    MatCell,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatRow,
    MatTable,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRowDef,
    MatRowDef,
    MatIconButton,


  ],
  templateUrl: './tableau-utilisateurs.component.html',
  styleUrl: './tableau-utilisateurs.component.scss'
})
export class TableauUtilisateursComponent {

  displayedColumns: string[] = ['nom', 'prenom', 'boutons'];

  @Input()
  listUtilisateurs: UtilisateurDto[] = [];

  constructor(private readonly utilisateurService: UtilisateursService) {
  }

  edit(id:number) {

  }

  delete(id:number) {
    this.utilisateurService.delete(id);
  }
}
