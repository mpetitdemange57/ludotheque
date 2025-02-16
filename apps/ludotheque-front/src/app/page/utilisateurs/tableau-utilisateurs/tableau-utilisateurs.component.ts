import {Component, Input} from '@angular/core';
import {MatFabAnchor, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatTooltip} from "@angular/material/tooltip";
import {Router, RouterLink} from "@angular/router";
import {UtilisateurDto} from "../../../../../../../libs/contrat/UtilisateurDto";
import {MatCell, MatCellDef, MatColumnDef, MatHeaderCell, MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef, MatTable} from "@angular/material/table";
import {UtilisateurService} from "../../../../../../ludotheque-backend/src/app/utilisateur/utilisateur.service";
import {UtilisateursService} from "../../../shared/services/utilisateurs.service";
import {MatSnackBar} from "@angular/material/snack-bar";

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
  templateUrl: './tableau-utilisateurs.component.html'
})
export class TableauUtilisateursComponent {

  displayedColumns: string[] = ['nom', 'prenom', 'boutons'];

  @Input()
  listUtilisateurs: UtilisateurDto[] = [];

  constructor(private readonly utilisateurService: UtilisateursService,
              private readonly router: Router,
              private readonly snackBar: MatSnackBar) {
  }

  edit(id:number) {
    this.router.navigate(['utilisateurs','edit',id]).then(null)
  }

  delete(id:number) {
    this.utilisateurService.delete(id).subscribe(() => {
      this.utilisateurService.findAll();
      this.snackBar.open("Utilisateur supprimé", "Fermer", {duration: 1000})
    })
  }
}
