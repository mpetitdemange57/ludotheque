import { Component } from '@angular/core';
import {MatFabAnchor} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatTooltip} from "@angular/material/tooltip";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-tableau-jeux',
  imports: [
    MatFabAnchor,
    MatIcon,
    MatTooltip,
    RouterLink
  ],
  templateUrl: './tableau-jeux.component.html',
  styleUrl: './tableau-jeux.component.scss'
})
export class TableauJeuxComponent {

}
