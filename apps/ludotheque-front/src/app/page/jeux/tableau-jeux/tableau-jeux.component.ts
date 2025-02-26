import {Component, inject, Input, LOCALE_ID} from '@angular/core';
import {
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderCellDef,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    MatTable,
    MatTableDataSource
} from "@angular/material/table";
import {JeuDto} from "../../../../../../../libs/contrat/JeuDto";
import {MatButton, MatFabAnchor, MatIconButton} from "@angular/material/button";
import {MatTooltip} from "@angular/material/tooltip";
import {Router, RouterLink} from "@angular/router";
import {MatIcon} from "@angular/material/icon";
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";
import {DatePipe} from "@angular/common";
import {JeuService} from "../../../../../../ludotheque-backend/src/app/jeux/jeu.service";
import {JeuxService} from "../../../shared/services/jeux.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-tableau-jeux',
    imports: [
        MatTable,
        MatColumnDef,
        MatHeaderCell,
        MatCell,
        MatHeaderRow,
        MatRow,
        MatHeaderCellDef,
        MatCellDef,
        MatRowDef,
        MatHeaderRowDef,
        MatFabAnchor,
        MatTooltip,
        RouterLink,
        MatIcon,
        MatPaginatorModule,
        DatePipe,
        MatIconButton,
    ],
  templateUrl: './tableau-jeux.component.html',
  styleUrl: './tableau-jeux.component.scss'
})
export class TableauJeuxComponent {

    displayedColumns: string[] = ['id', 'titre', 'proprietaire', 'emprunteur', 'dateEmprunt', 'boutons'];

    @Input()
    listJeux: JeuDto[] = [];

    router = inject(Router);
    jeuxService = inject(JeuxService);
    snackBar = inject(MatSnackBar);

    edit(id:number) {
        this.router.navigate(['jeux','edit',id]).then(null)
    }

    delete(id:number) {
        this.jeuxService.delete(id)
            .subscribe(() => {
                this.jeuxService.findAll();
                this.snackBar.open("Jeu supprimé", "Fermer", {duration: 1000})
            })
    }

}
