import {Component, Input, LOCALE_ID} from '@angular/core';
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
import {MatFabAnchor} from "@angular/material/button";
import {MatTooltip} from "@angular/material/tooltip";
import {RouterLink} from "@angular/router";
import {MatIcon} from "@angular/material/icon";
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";
import {DatePipe} from "@angular/common";

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
    ],
  templateUrl: './tableau-jeux.component.html',
  styleUrl: './tableau-jeux.component.scss'
})
export class TableauJeuxComponent {

    displayedColumns: string[] = ['id', 'titre', 'proprietaire', 'emprunteur', 'dateEmprunt'];

    @Input()
    listJeux: JeuDto[] = [];

}
